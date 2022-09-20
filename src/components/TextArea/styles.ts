import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  label: {
    color: '#000000',
    fontSize: fp(20),
    fontFamily: SpoqaHanSansNeo.bold,
    letterSpacing: fp(-1),
    marginLeft: wp(2.5),
    marginBottom: hp(-5),
  },
  inputArea: {
    fontSize: fp(15.5),
    textAlignVertical: 'top',
    letterSpacing: fp(-0.5),
    height: hp(150),
    fontFamily: SpoqaHanSansNeo.medium,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    marginBottom: hp(35),
  },
});
