export const SCREEN = {
  HOME: 'HOME',
  MAP: 'MAP',
  ON_BOARDING: 'ON_BOARDING',
  OPEN_CHALLENGE_STEP1: 'OPEN_CHALLENGE_STEP1',
  OPEN_CHALLENGE_STEP2: 'OPEN_CHALLENGE_STEP2',
  OPEN_CHALLENGE_STEP3: 'OPEN_CHALLENGE_STEP3',
  OPEN_CHALLENGE_STEP4: 'OPEN_CHALLENGE_STEP4',
  OPEN_CHALLENGE_STEP5: 'OPEN_CHALLENGE_STEP5',
  COMMUNITY: 'COMMUNITY',
  MARKET: 'MARKET',
  MY_INFO: 'MY_INFO',
  VIEW_MORE_CHALLENGE: 'VIEW_MORE_CHALLENGE',
  MY_CHALLENGE: 'MY_CHALLENGE',
  CHALLENGE_DETAIL: 'CHALLENGE_DETAIL',
} as const;

export type StackParamList = {
  [K in keyof typeof SCREEN]: undefined;
};
