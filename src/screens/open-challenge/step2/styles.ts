import {Dimensions, StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mapbox: {
    flex: 1,
  },
  touchableExitImage: {
    marginLeft: wp(20),
  },
  toastContainer: {
    paddingHorizontal: wp(12),
    paddingVertical: hp(8),
    marginLeft: hp(100),
    backgroundColor: 'white',
    color: colors.text.primary,
    borderRadius: hp(50),
    fontFamily: SpoqaHanSansNeo.bold,
  },
  screenContainer: {
    flex: 1,
  },
  topSheetContainer: {
    flex: 1,
    marginTop: wp(20),
    maxHeight: hp(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: SCREEN_WIDTH,
  },
  bottomSheetContainer: {
    flex: 1,
    paddingHorizontal: wp(25),
    paddingVertical: hp(35),
    paddingBottom: hp(50),
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  bottomSheetTitle: {
    color: colors.text.primary,
    fontSize: fp(21),
    marginTop: hp(20),
    fontFamily: SpoqaHanSansNeo.bold,
    marginBottom: hp(2),
    letterSpacing: wp(-0.5),
    textAlign: 'center',
  },
  test: {
    width: wp(100),
    height: wp(100),
    backgroundColor: 'red',
  },
  bottomSheetSubTitle: {
    textAlign: 'center',
    color: colors.text.primary,
    fontSize: fp(15),
    fontFamily: SpoqaHanSansNeo.medium,
    marginBottom: hp(24),
    letterSpacing: wp(-0.5),
  },
  sliderTextContaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH - wp(80),
  },
  sliderText: {
    fontSize: fp(14),
    fontFamily: SpoqaHanSansNeo.medium,
    color: colors.text.primary,
    letterSpacing: wp(-0.5),
  },
  safeAreaView: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: SCREEN_WIDTH - wp(70),
    marginTop: hp(10),
  },
});
