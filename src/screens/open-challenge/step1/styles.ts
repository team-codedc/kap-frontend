import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  openChallengeContainer: {
    alignItems: 'center',
  },
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
    width: wp(280),
    backgroundColor: '#f8f8f8',
    borderRadius: wp(100),
    paddingVertical: hp(14),
    paddingHorizontal: wp(17),
    marginTop: hp(25),
    flexDirection: 'row',
  },
  openChallengeText: {
    color: colors.text.primary,
    fontSize: fp(15),
    textAlignVertical: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    letterSpacing: wp(-0.8),
    fontFamily: SpoqaHanSansNeo.medium,
  },
  openChallengeCategory: {
    marginTop: hp(40),
    textDecorationLine: 'underline',
    textUnderlinePosition: 'under',
  },
  onChallengeNewCaption: {
    backgroundColor: 'red',
    marginTop: hp(30),
    marginBottom: hp(10),
    right: wp(120),
    position: 'relative',
    paddingVertical: hp(5),
    paddingHorizontal: wp(10),
    borderRadius: hp(20),
    color: 'white',
  },
});
