import {APIResponse, API_SUFFIX, instance} from './instance';

export interface MyChallengeResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  rule: string;
  description: string;
  category: string;
  lat: number;
  lng: number;
  host: {
    id: string;
    createdAt: string;
    updatedAt: string;
    socialId: string;
    email: string;
    name: string;
    nickname: string;
    birth: string;
    socialType: string;
  };
}

export const getMyChallenge = async (
  id: string,
): Promise<APIResponse<MyChallengeResponse[]>> => {
  const {data} = await instance.get<APIResponse<MyChallengeResponse[]>>(
    `${API_SUFFIX.MY_CHALLENGE}/${id}`,
  );
  return data;
};

export const getDetailChallenge = async (
  id: string,
): Promise<APIResponse<MyChallengeResponse[]>> => {
  const {data} = await instance.get<APIResponse<MyChallengeResponse[]>>(
    `${API_SUFFIX.DETAIL_CHALLENGE}/${id}`,
  );
  return data;
};

export const getAllChallenge = async (): Promise<
  APIResponse<MyChallengeResponse[]>
> => {
  const {data} = await instance.get<APIResponse<MyChallengeResponse[]>>(
    `${API_SUFFIX.MY_CHALLENGE}`,
  );
  return data;
};
