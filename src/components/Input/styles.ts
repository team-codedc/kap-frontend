import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: hp(35),
  },
  label: {
    fontSize: fp(15),
    color: colors.text.gary,
    fontFamily: SpoqaHanSansNeo.bold,
  },
  input: {
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: wp(1),
    marginTop: hp(-35),
  },
});
