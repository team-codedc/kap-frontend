export const SCREEN = {
  HOME: 'HOME',
  ON_BOARDING: 'ON_BOARDING',
} as const;

export type StackParamList = {
  [K in keyof typeof SCREEN]: undefined;
};
