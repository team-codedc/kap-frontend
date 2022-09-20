import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  homeScreenWrapper: {
    marginBottom: wp(-8),
    padding: wp(27),
    borderRadius: 17,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderStartColor: '#F0F0F0',
    borderStartWidth: 1,
    borderEndColor: '#F0F0F0',
    borderEndWidth: 1,
  },
  homeScreenHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeScreenHeaderProfileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeScreenHeaderRegionWrapper: {
    flexDirection: 'row',
  },
  homeScreenHeaderRegion: {
    fontSize: fp(17),
    fontFamily: SpoqaHanSansNeo.bold,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeScreenHeaderMapPinIcon: {
    width: wp(25),
    height: hp(25),
    marginRight: wp(3),
    marginLeft: wp(-8),
  },
  homeScreenHeaderProfileIcon: {
    width: wp(24),
    height: hp(24),
    borderRadius: 44 / 2,
    marginRight: wp(6),
  },
  homeScreenHeaderProfileUserName: {
    fontSize: fp(16),
    fontFamily: SpoqaHanSansNeo.bold,
    color: 'black',
  },
  homeScreenOptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(14),
  },
  homeScreenOptionButton: {
    marginRight: wp(17),
  },
  homeScreenOptionFont: {
    fontSize: fp(25),
    fontFamily: SpoqaHanSansNeo.medium,
    color: 'black',
    marginLeft: wp(-3),
    marginBottom: hp(-10),
  },
});
