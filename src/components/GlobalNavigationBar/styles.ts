import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  GNBWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: hp(18),
    paddingBottom: hp(18),
    paddingLeft: wp(30),
    paddingRight: wp(20),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  GNBContentsWrapper: {
    alignItems: 'center',
  },
  GNBIcon: {
    width: wp(28),
    height: hp(28),
  },
  GNBDescription: {
    paddingTop: hp(2),
    fontSize: fp(9.5),
    fontFamily: SpoqaHanSansNeo.bold,
  },
});
