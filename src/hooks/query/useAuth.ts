import {useSetRecoilState} from 'recoil';
import {useMutation} from '@tanstack/react-query';
import {globalAccessTokenState} from 'src/store';
import {
  APIErrorResponse,
  APIResponse,
  getUserProfile,
  issueAccessToken,
  kakaoLogin,
  setAPIAccessToken,
  UserProfileResponse,
} from 'src/api';
import {AxiosError} from 'axios';
import {OAUTH_TYPE} from 'src/constant';
import {
  KakaoOAuthToken,
  login as kakaoSDKLogin,
} from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    switch (oauthType) {
      case 'KAKAO':
        const token: KakaoOAuthToken = await kakaoSDKLogin();
        const {
          result: {accessToken, refreshToken},
        } = await kakaoLogin(token.accessToken);
        return {accessToken, refreshToken};
      default:
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
    return await getUserProfile();
  };

  const {mutate} = useMutation<
    APIResponse<UserProfileResponse>,
    AxiosError<APIErrorResponse>,
    UseLoginParameter
  >(['useLogin'], login, {
    onSuccess: data => {
      console.log(data);
      return;
    },
    retry: 0,
  });

  return {login: mutate};
};
