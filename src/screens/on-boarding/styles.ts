import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  onBoardingItemsContainer: {
    flex: 1,
    alignItems: 'center',
  },

  onBoardingFlatListItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onBoardingFlatListItemImage: {
    width: wp(170),
    height: hp(170),
    marginBottom: hp(40),
  },
  onBoardingFlatListItemTitle: {
    fontFamily: SpoqaHanSansNeo.bold,
    fontSize: fp(22),
    textAlign: 'center',
    color: colors.text.primary,
    marginBottom: hp(9),
  },
  onBoardingFlatListItemDescription: {
    fontFamily: SpoqaHanSansNeo.regular,
    fontSize: fp(17),
    textAlign: 'center',
    color: colors.text.primary,
  },

  indicator: {
    width: wp(7),
    height: hp(7),
    borderRadius: hp(4.5),
    backgroundColor: '#E4E3E3',
    marginHorizontal: wp(7),
  },
  indicatorFocused: {
    backgroundColor: '#000000',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(16),
  },

  onBoardingBottomContainer: {
    marginTop: hp(18),
    marginBottom: hp(5),
  },
  findAccountTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(9),
    marginBottom: hp(15),
  },
  findAccountText: {
    fontSize: fp(13),
    fontFamily: SpoqaHanSansNeo.light,
    textAlign: 'center',
    letterSpacing: fp(-1),
    color: colors.text.primary,
  },
  findAccountButton: {
    fontSize: fp(13),
    fontFamily: SpoqaHanSansNeo.light,
    textAlign: 'center',
    letterSpacing: fp(-1),
    marginLeft: wp(2),
    textDecorationLine: 'underline',
    color: colors.text.primary,
  },

  loginOAuthItemListContainer: {
    flexDirection: 'column',
  },
  loginOAuthItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginOAuthIcon: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(17.5),
    backgroundColor: '#c4c4c4',
    marginRight: wp(13),
  },
  loginOAuthText: {
    fontSize: fp(14),
    fontFamily: SpoqaHanSansNeo.regular,
    letterSpacing: wp(-1),
  },
  loginOAuthItemColumnGap: {
    marginTop: hp(24),
  },
});
