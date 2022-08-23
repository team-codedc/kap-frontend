import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  globalNavigationBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: hp(20),
    paddingBottom: hp(20),
    paddingLeft: wp(30),
    paddingRight: wp(20),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  globalNavigationBarContentsWrapper: {
    alignItems: 'center',
  },
  globalNavigationBarIcon: {
    width: wp(28),
    height: hp(28),
  },
  globalNavigationBarDescription: {
    paddingTop: hp(2),
    fontSize: fp(9.5),
    fontFamily: SpoqaHanSansNeo.bold,
  },
});
