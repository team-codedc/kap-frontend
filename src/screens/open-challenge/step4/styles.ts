import {StyleSheet} from 'react-native';
import {fp, hp, wp} from 'src/utils';
import {Dimensions} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  typeSelectWrapper: {
    flexDirection: 'row',
  },
  galleryContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#dcdcdc',
    borderRadius: hp(5),
    padding: wp(15),
    width: SCREEN_WIDTH - wp(235),
    margin: wp(10),
    height: hp(150),
  },
  galleryText: {
    textAlign: 'center',
    fontFamily: SpoqaHanSansNeo.medium,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    width: '100%',
    fontSize: fp(13),
    color: '#000000',
    height: hp(50),
    borderColor: '#000000',
    borderWidth: hp(1),
    borderRadius: hp(12),
    padding: 10,
  },
  footerButton: {
    marginTop: hp(400),
  },
});
