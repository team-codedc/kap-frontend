import {SCREEN} from './screen';

export const GLOBAL_NAVIGATION_BAR = [
  {
    icon: require('src/assets/gnb-home-button.png'),
    text: '홈',
    id: SCREEN.HOME,
  },
  {
    icon: require('src/assets/gnb-map-button.png'),
    text: '지도',
    id: SCREEN.MAP,
  },
  {
    icon: require('src/assets/gnb-community-button.png'),
    text: '커뮤니티',
    id: SCREEN.COMMUNITY,
  },
  {
    icon: require('src/assets/gnb-market-button.png'),
    text: '마켓',
    id: SCREEN.MARKET,
  },
  {
    icon: require('src/assets/gnb-profile-button.png'),
    text: '마이환경',
    id: SCREEN.MY_INFO,
  },
];
