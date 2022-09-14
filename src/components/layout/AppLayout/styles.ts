import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  title: {
    fontSize: fp(25),
    fontFamily: SpoqaHanSansNeo.bold,
    color: colors.black,
    marginBottom: hp(30),
    marginTop: hp(10),
  },
  appLayoutContainer: {
    flex: 2,
  },
  appLayoutWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight: wp(25),
    paddingLeft: wp(25),
    borderRadius: hp(20),
  },
  layout_exit_button: {
    width: wp(29),
    height: hp(29),
    top: hp(20),
  },
});
