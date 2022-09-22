import {useRecoilState, useRecoilValue} from 'recoil';
import {useQuery} from '@tanstack/react-query';
import {globalAccessTokenState, globalChallengeDetailIdState} from 'src/store';
import {getUserProfile, issueAccessToken, setAPIAccessToken} from 'src/api';
import {useApiError} from '../uesApiError';
import {CustomException} from 'src/exceptions';
import {AsyncStorage} from 'react-native';
import {
  getAllChallenge,
  getDetailChallenge,
  getMyChallenge,
} from 'src/api/challenge';

export const useMyChallenge = () => {
  const [globalAccessToken, setGlobalAccessToken] = useRecoilState(
    globalAccessTokenState,
  );
  const {handlerError} = useApiError();

  return useQuery(
    ['useMyChallenge'],
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

      return await getUserProfile().then(async data => {
        const {result} = await getMyChallenge(data.result.id);
        return result;
      });
    },
    {
      onError: (error: any) => {
        setGlobalAccessToken('');
        setAPIAccessToken(null);
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

export const useDetailChallenge = () => {
  const [globalAccessToken, setGlobalAccessToken] = useRecoilState(
    globalAccessTokenState,
  );
  const {handlerError} = useApiError();
  const detailChallenge = useRecoilValue(globalChallengeDetailIdState);

  return useQuery(
    ['useDetailChallenge'],
    async () => {
      console.log('tlfgod');
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

      const {result} = await getDetailChallenge(detailChallenge.features[0].id);
      return result;
    },
    {
      onError: (error: any) => {
        console.log(error);
        setGlobalAccessToken('');
        setAPIAccessToken(null);
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

export const useAllChallenge = () => {
  const [globalAccessToken, setGlobalAccessToken] = useRecoilState(
    globalAccessTokenState,
  );
  const {handlerError} = useApiError();

  return useQuery(
    ['useMyChallenge'],
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

      const {result} = await getAllChallenge();
      return result;
    },
    {
      onError: (error: any) => {
        setGlobalAccessToken('');
        setAPIAccessToken(null);
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
