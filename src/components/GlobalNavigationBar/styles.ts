import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo, colors} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  globalNavigationBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: hp(16),
    paddingBottom: hp(16),
    paddingLeft: wp(30),
    paddingRight: wp(22),
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
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
    fontSize: fp(12),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#C9C9C9',
  },
  globalNavigationBarDescriptionFocused: {
    color: '#282727',
  },
  globalNavigationBarFlatListItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globalNavigationBarFlatListItemIcon: {
    width: wp(20),
    height: hp(20),
    marginBottom: hp(10),
  },
  globalNavigationBarFlatListItemText: {
    fontFamily: SpoqaHanSansNeo.bold,
    fontSize: fp(22),
    textAlign: 'center',
    color: colors.text.primary,
    marginBottom: hp(9),
  },
  globalNavigationBarFlatListItemDescription: {
    fontFamily: SpoqaHanSansNeo.regular,
    fontSize: fp(17),
    textAlign: 'center',
    color: colors.text.primary,
  },
});
