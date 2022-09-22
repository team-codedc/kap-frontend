import axios from 'axios';

export const API_SUFFIX = {
  BASE_URL: __DEV__
    ? 'http://localhost:4000/api'
    : 'https://api.hanseithon.com/api',
  AUTH_KAKAO: '/auth/kakao',
  AUTH_GOOGLE: '/auth/google',
  AUTH_REFRESH: '/auth/refresh',
  USER_PROFILE: '/users/profile',
  CHALLENGE_CREATE: '/challenges',
  MY_CHALLENGE: '/challenges',
  DETAIL_CHALLENGE: '/challenges/detail',
  JOIN_CHALLENGE: 'challenges/join',
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASE_URL,
  withCredentials: true,
});

export type APIResponseStatusType = 'SUCCESS' | 'FAILED';

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  message: string;
  result: T;
}

export interface APIErrorResponse {
  status: 'FAILED';
  message: string;
  result?: null;
}

export const setAPIAccessToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
