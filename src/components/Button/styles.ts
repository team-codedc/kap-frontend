import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp} from 'src/utils';

export const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: hp(15),
    borderRadius: hp(6),
  },
  label: {
    color: '#ffffff',
    fontSize: fp(15),
    fontFamily: SpoqaHanSansNeo.bold,
    textAlign: 'center',
    letterSpacing: fp(-1),
  },
});
