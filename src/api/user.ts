import {OAUTH_TYPE} from 'src/constant';
import {APIResponse, API_SUFFIX, instance} from './instance';

export interface UserProfileResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  socialId: string;
  email: string;
  name: string | null;
  nickname: string | null;
  birth: string;
  socialType: OAUTH_TYPE;
}

export const getUserProfile = async (): Promise<
  APIResponse<UserProfileResponse>
> => {
  const {data} = await instance.get<APIResponse<UserProfileResponse>>(
    API_SUFFIX.USER_PROFILE,
  );

  return data;
};
