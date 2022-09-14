export const SCREEN = {
  HOME: 'HOME',
  MAP: 'MAP',
  ON_BOARDING: 'ON_BOARDING',
  OPEN_CHALLENGE: {
    STEP1: 'STEP1',
    SETP2: 'STEP2',
    STEP3: 'STEP3',
  },
  OPEN_CHALLENGE_STEP3: 'OPEN_CHALLENGE_STEP3',
} as const;

export type StackParamList = {
  [K in keyof typeof SCREEN]: undefined;
};
