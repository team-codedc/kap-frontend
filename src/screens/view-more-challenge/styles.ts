import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  viewMoreChallengeScreenContentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: wp(5),
  },
  viewMoreChallengeScreenContentWrapper: {
    paddingRight: wp(4),
    paddingBottom: hp(30),
  },
  viewMoreChallengeScreenContentDescription: {
    paddingTop: hp(8),
    fontSize: fp(16),
    fontFamily: SpoqaHanSansNeo.regular,
    color: '#000000',
    fontWeight: '600',
  },
  viewMoreChallengeScreenContentDateText: {
    fontSize: fp(15),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#000000',
    fontWeight: '600',
    letterSpacing: wp(-1),
  },
  viewMoreChallengeScreenContentTagWrapper: {
    maxWidth: wp(160),
    marginTop: hp(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewMoreChallengeScreenContentTag: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    marginRight: wp(8),
    marginBottom: hp(8),
    borderRadius: 3,
    fontSize: fp(12),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#000000',
    backgroundColor: '#F3F3F3',
  },
});
