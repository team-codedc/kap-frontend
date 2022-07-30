import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const FIGMA_WINDOW_WIDTH = 390;
const FIGMA_WINDOW_HEIGHT = 844;

const widthPercentage = (width: number) => {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
  return responsiveScreenWidth(percentage);
};

const heightPercentage = (height: number) => {
  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
  return responsiveScreenHeight(percentage);
};

const fontPercentage = (size: number) => {
  const percentage = size * 0.135;
  return responsiveScreenFontSize(percentage);
};

export const wp = widthPercentage;
export const hp = heightPercentage;
export const fp = fontPercentage;
