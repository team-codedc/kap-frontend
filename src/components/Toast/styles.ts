import {StyleSheet, Dimensions} from 'react-native';

import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  forAndroid: {
    width: SCREEN_WIDTH - wp(40),
    height: hp(60),
    marginTop: hp(-5),
  },
  contentContainer: {
    marginTop: hp(1),
    paddingHorizontal: wp(17),
  },
  toastText1: {
    color: '#282727',
    fontSize: fp(14),
    fontFamily: SpoqaHanSansNeo.bold,
    letterSpacing: fp(-0.1),
  },
  toastText2: {
    color: '#7C7A80',
    fontSize: fp(14),
    fontFamily: SpoqaHanSansNeo.regular,
    marginTop: hp(-1),
  },
  baseToast: {
    marginTop: hp(15),
  },
  successToast: {
    borderLeftColor: '#4ABB4F',
  },
  errorToast: {
    borderLeftColor: '#F1574D',
  },
  infoToast: {
    borderLeftColor: 'skyblue',
  },
  warningToast: {
    borderLeftColor: '#E9AE00',
  },
});
