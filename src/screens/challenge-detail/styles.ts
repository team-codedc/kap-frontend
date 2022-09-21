import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  challengeDetailWrapper: {
    paddingHorizontal: wp(8),
    marginBottom: hp(60),
  },
  challengeDetailTitleContainer: {
    paddingBottom: hp(23),
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
  },
  challengeDetailTitleWrapper: {
    paddingTop: hp(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  challengeDetailTitleText: {
    fontFamily: SpoqaHanSansNeo.bold,
    fontSize: fp(22),
    color: '#343434',
    letterSpacing: wp(-1),
  },
  challengeDetailParticipantWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(7),
  },
  challengeDetailParticipantText: {
    color: 'black',
    fontFamily: SpoqaHanSansNeo.regular,
    fontWeight: '700',
    fontSize: fp(14),
  },
  challengeDetailParticipantIcon: {
    tintColor: '#000000',
    width: wp(15),
    height: hp(15),
    marginRight: wp(6),
  },
  challengeDetailGategory: {
    width: wp(65),
    paddingVertical: hp(7),
    backgroundColor: '#000000',
    borderRadius: 30,
    fontSize: fp(14),
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: SpoqaHanSansNeo.bold,
    marginTop: hp(18),
  },
  challengeDetailPeriodWrapper: {
    paddingVertical: hp(22),
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
  },
  challengeDetailPeriod: {
    fontSize: fp(19),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#000000',
  },
  challengeDeatilPeriodText: {
    fontSize: fp(18),
    fontFamily: SpoqaHanSansNeo.regular,
    color: '#000000',
    marginTop: hp(6),
    letterSpacing: wp(-1),
  },
  challengeDetailDescriptionWrapper: {
    marginVertical: hp(22),
  },
  challengeDetailDescription: {
    fontSize: fp(19),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#000000',
    marginBottom: hp(8),
  },
  challengeDetailDescriptionText: {
    fontSize: fp(18),
    fontFamily: SpoqaHanSansNeo.regular,
    color: '#000000',
    letterSpacing: wp(-1),
    lineHeight: hp(33),
  },
  challengeDetailCertification: {
    fontSize: fp(19),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#000000',
    marginBottom: hp(8),
  },
  challengeDetailCertificationText: {
    fontSize: fp(18),
    fontFamily: SpoqaHanSansNeo.regular,
    color: '#000000',
    letterSpacing: wp(-1),
  },
  challengeDetailCertificationCapture: {
    textAlign: 'center',
    paddingTop: hp(60),
    width: wp(150),
    height: hp(150),
    backgroundColor: '#D9D9D9',
    marginTop: hp(30),
  },
  challengeDetailFooterButton: {
    marginTop: hp(120),
  },
});
