export const SCREEN = {
  HOME: 'HOME',
  MAP: 'MAP',
  ON_BOARDING: 'ON_BOARDING',
  COMMUNITY: 'COMMUNITY',
  MARKET: 'MARKET',
  MY_INFO: 'MY_INFO',
} as const;

export type StackParamList = {
  [K in keyof typeof SCREEN]: undefined;
};
