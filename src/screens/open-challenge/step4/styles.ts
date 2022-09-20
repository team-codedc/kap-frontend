import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  openChanllengeStep5Container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(100),
  },
  openChanllengeStep5Image: {
    width: wp(180),
    height: hp(180),
    marginBottom: hp(30),
  },
  openChanllengeStep5Title: {
    fontFamily: SpoqaHanSansNeo.bold,
    fontSize: fp(25),
    textAlign: 'center',
    color: colors.text.primary,
    marginBottom: hp(9),
  },
  openChanllengeStep5Description: {
    fontFamily: SpoqaHanSansNeo.regular,
    fontSize: fp(17),
    textAlign: 'center',
    color: colors.text.primary,
  },
  footerButton: {
    marginBottom: hp(50),
  },
});
