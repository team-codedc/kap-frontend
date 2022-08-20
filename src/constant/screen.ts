export const SCREEN = {
  HOME: 'HOME',
  MAP: 'MAP',
  ON_BOARDING: 'ON_BOARDING',
} as const;

export type StackParamList = {
  [K in keyof typeof SCREEN]: undefined;
};
