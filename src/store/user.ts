import {atom} from 'recoil';

export const globalAccessTokenState = atom<string>({
  key: 'globalAccessToken',
  default: '',
});

export const globalUserLcoation = atom<{lat: number; lng: number}>({
  key: 'globalUserLcoation',
  default: {
    lat: 0,
    lng: 0,
  },
});
