import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  globalNavigationBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: hp(22),
    paddingBottom: hp(22),
    paddingLeft: wp(30),
    paddingRight: wp(20),
    borderRadius: 17,
    borderTopColor: '#F0F0F0',
    borderTopWidth: 1,
    borderStartColor: '#F0F0F0',
    borderStartWidth: 1,
    borderEndColor: '#F0F0F0',
    borderEndWidth: 1,
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
    fontSize: fp(10),
    fontFamily: SpoqaHanSansNeo.bold,
  },
});
