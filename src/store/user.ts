import {atom} from 'recoil';

export const globalAccessTokenState = atom<string>({
  key: 'globalAccessToken',
  default: '',
});
