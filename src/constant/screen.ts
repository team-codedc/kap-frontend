export const SCREEN = {
  HOME: 'HOME',
  MAP: 'MAP',
  ON_BOARDING: 'ON_BOARDING',
  OPEN_CHALLENGE_STEP3: 'OPEN_CHALLENGE_STEP3',
  OPEN_CHALLENGE_STEP4: 'OPEN_CHALLENGE_STEP4',
} as const;

export type StackParamList = {
  [K in keyof typeof SCREEN]: undefined;
};
