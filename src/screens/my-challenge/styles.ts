import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  homeContentsScreenMyChallengeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginBottom: hp(10),
    paddingHorizontal: hp(23),
    paddingVertical: hp(13),
    borderRadius: hp(5),
  },
  homeContentsScreenMyChallenge: {
    color: colors.text.primary,
    fontSize: fp(15),
    textAlignVertical: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    letterSpacing: wp(-0.8),
    fontFamily: SpoqaHanSansNeo.medium,
  },
});
