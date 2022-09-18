import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  layout: {
    flex: 2,
    backgroundColor: 'red',
  },
  challengeNameContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginBottom: hp(35),
    paddingBottom: hp(25),
  },
  galleryContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#dcdcdc',
    borderRadius: hp(5),
    padding: wp(15),
    width: wp(55),
  },
  challengeNameInput: {
    marginLeft: wp(15),
    fontSize: fp(15.5),
    textAlignVertical: 'center',
    letterSpacing: fp(-0.5),
    fontFamily: SpoqaHanSansNeo.medium,
  },
  footerButton: {
    marginTop: hp(60),
  },
});
