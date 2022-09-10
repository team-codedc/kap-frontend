import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  privacyPageTitle: {
    fontSize: fp(25),
    fontFamily: SpoqaHanSansNeo.bold,
    color: colors.black,
    marginBottom: hp(30),
  },
  privacyButtonWrapper: {
    width: wp(340),
    top: hp(425),
  },
});
