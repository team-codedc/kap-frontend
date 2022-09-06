import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  openChallengeContainer: {alignItems: 'center'},
  openChallengeBoldText: {
    fontFamily: SpoqaHanSansNeo.bold,
    color: colors.text.primary,
    fontSize: fp(25),
    letterSpacing: wp(-0.8),
  },
  openChallengeRegularText: {
    fontFamily: SpoqaHanSansNeo.regular,
    color: colors.text.primary,
    fontSize: fp(25),
    letterSpacing: wp(-0.8),
  },
  openChallengeCategoryButton: {
    fontFamily: SpoqaHanSansNeo.medium,
    width: wp(280),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    backgroundColor: '#f8f8f8',
    borderRadius: wp(100),
    paddingVertical: hp(23),
    paddingHorizontal: wp(30),
    marginTop: hp(25),
    color: colors.text.primary,
    fontSize: fp(16),
    letterSpacing: wp(-0.5),
  },
  openChallengeCategory: {
    marginTop: hp(40),
    textDecorationLine: 'underline',
    textUnderlinePosition: 'under',
  },
  onChallengeNewCaption: {
    backgroundColor: 'red',
  },
});
