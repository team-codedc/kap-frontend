import {useRecoilState, useSetRecoilState} from 'recoil';
import {useMutation, useQuery} from '@tanstack/react-query';
import {globalAccessTokenState} from 'src/store';
import {
  APIErrorResponse,
  getUserProfile,
  googleLogin,
  issueAccessToken,
  kakaoLogin,
  setAPIAccessToken,
} from 'src/api';
import {AxiosError} from 'axios';
import {OAUTH_TYPE} from 'src/constant';
import {
  KakaoOAuthToken,
  login as kakaoSDKLogin,
} from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import {useApiError} from '../uesApiError';
import {CustomException} from 'src/exceptions';

type UseLoginParameter = OAUTH_TYPE | {refreshToken: string};
type GetCredentialsResponse = Promise<{
  accessToken: string | null;
  refreshToken: string | null;
}>;

export const useLogin = () => {
  const setGlobalAccessToken = useSetRecoilState(globalAccessTokenState);

  const getCredentialsBySocialLogin = async (
    oauthType: OAUTH_TYPE,
  ): GetCredentialsResponse => {
    try {
      switch (oauthType) {
        case 'KAKAO': {
          const token: KakaoOAuthToken = await kakaoSDKLogin();
          const {
            result: {accessToken, refreshToken},
          } = await kakaoLogin(token.accessToken);
          return {accessToken, refreshToken};
        }
        case 'GOOGLE':
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          if (!userInfo.serverAuthCode) {
            throw new CustomException('구글 로그인 중 오류가 발생했어요');
          }

          const {
            result: {accessToken, refreshToken},
          } = await googleLogin(userInfo.serverAuthCode);
          return {accessToken, refreshToken};
        default:
          return {accessToken: null, refreshToken: null};
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Toast.show({
          type: 'warning',
          text1: '구글 로그인이 취소되었어요 :(',
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Toast.show({
          type: 'warning',
          text1: 'Google Play 서비스가 필요해요',
          text2: 'Google Play가 없거나 최신버전이 아닌지 확인해주세요',
        });
      } else if (error.code === 'RNKakaoLogins') {
        Toast.show({
          type: 'warning',
          text1: '카카오 로그인이 취소되었어요 :(',
        });
      } else if (error instanceof CustomException) {
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      } else {
        throw error;
      }

      return {accessToken: null, refreshToken: null};
    }
  };

  const getCredentialsByRefreshToken = async (
    refreshToken: string,
  ): GetCredentialsResponse => {
    const {
      result: {accessToken},
    } = await issueAccessToken(refreshToken);

    return {accessToken, refreshToken};
  };

  const getCredentials = async (parameter: UseLoginParameter) => {
    if (typeof parameter === 'object') {
      return await getCredentialsByRefreshToken(parameter.refreshToken);
    } else {
      return await getCredentialsBySocialLogin(parameter);
    }
  };

  const login = async (parameter: UseLoginParameter) => {
    const {accessToken, refreshToken} = await getCredentials(parameter);
    if (accessToken === null || refreshToken === null) {
      throw new Error('소셜 로그인에 실패했어요');
    }

    AsyncStorage.setItem('@token', refreshToken);
    setGlobalAccessToken(accessToken);
    setAPIAccessToken(accessToken);
    return accessToken;
  };

  const {data: profile, refetch} = useProfile();
  const {handlerError} = useApiError({default: () => {}});
  const {mutate, ...mutations} = useMutation<
    string,
    AxiosError<APIErrorResponse>,
    UseLoginParameter
  >(['useLogin'], login, {
    onSuccess: () => refetch(),
    onError: handlerError,
    retry: 0,
  });

  return {login: mutate, profile, ...mutations};
};

export const useProfile = () => {
  const [globalAccessToken, setGlobalAccessToken] = useRecoilState(
    globalAccessTokenState,
  );
  const {handlerError} = useApiError();

  return useQuery(
    ['useProfile'],
    async () => {
      if (globalAccessToken === '') {
        const refreshToken = await AsyncStorage.getItem('@token');
        if (!refreshToken) {
          throw new CustomException(
            'NOT_FOUND_TOKEN',
            '리프레시 토큰을 찾을 수 없어요',
          );
        }
        const {result} = await issueAccessToken(refreshToken);
        setGlobalAccessToken(result.accessToken);
        setAPIAccessToken(result.accessToken);
      }

      const {result} = await getUserProfile();
      return result;
    },
    {
      onSuccess: profile => {
        Toast.show({
          type: 'success',
          text1: `${profile.name}님 환영해요!`,
          text2: '저희 병주고약주고를 이용해주셔서 감사합니다 :)',
          visibilityTime: 1000,
        });
      },
      onError: error => {
        setGlobalAccessToken('');
        setAPIAccessToken(null);

        // 에러가 CustomException이 아니거나
        // 에러가 CustomException인 경우 id가 NOT_FOUND_TOKEN이 아닌경우

        if (
          !(error instanceof CustomException) ||
          (error instanceof CustomException && error.id !== 'NOT_FOUND_TOKEN')
        ) {
          handlerError(error);
        }
      },
      retry: 0,
      staleTime: 60 * 60 * 10,
    },
  );
};
