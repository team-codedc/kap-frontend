import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: hp(35),
  },
  label: {
    fontSize: fp(15),
    color: colors.text.primary,
    fontFamily: SpoqaHanSansNeo.bold,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: wp(1),
    marginTop: hp(-35),
  },
});
