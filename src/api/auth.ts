import {APIResponse, API_SUFFIX, instance} from './instance';

export interface SocialLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const kakaoLogin = async (
  accessToken: string,
): Promise<APIResponse<SocialLoginResponse>> => {
  const {data} = await instance.post<APIResponse<SocialLoginResponse>>(
    API_SUFFIX.AUTH_KAKAO,
    {},
    {
      params: {
        code: accessToken,
      },
    },
  );

  return data;
};

export const googleLogin = async (
  idToken: string,
): Promise<APIResponse<SocialLoginResponse>> => {
  const {data} = await instance.post<APIResponse<SocialLoginResponse>>(
    API_SUFFIX.AUTH_GOOGLE,
    {},
    {
      params: {
        code: idToken,
      },
    },
  );

  return data;
};

export const issueAccessToken = async (refreshToken: string) => {
  const {data} = await instance.get<APIResponse<SocialLoginResponse>>(
    API_SUFFIX.AUTH_REFRESH,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );

  return data;
};
