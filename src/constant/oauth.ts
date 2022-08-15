export const OAUTH_ITEMS = [
  {
    id: 'KAKAO',
    icon: require('src/assets/kakao.png'),
    text: '카카오로 시작하기',
  },
] as const;

export type OAUTH_TYPE = Pick<typeof OAUTH_ITEMS[number], 'id'>['id'];
