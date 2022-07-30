import {StyleSheet} from 'react-native';
import {COLOR_PRIMARY} from 'src/styles/color';
import {fp, hp} from 'src/utils';

export const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_PRIMARY,
    paddingVertical: hp(15),
    borderRadius: hp(6),
  },
  label: {
    color: '#ffffff',
    fontSize: fp(15),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
