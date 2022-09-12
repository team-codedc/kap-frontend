import {StyleSheet} from 'react-native';
import {hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  appLayoutContainer: {
    flex: 2,
  },
  appLayoutWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingRight: wp(25),
    paddingLeft: wp(25),
    borderRadius: hp(20),
  },
  layout_exit_button: {
    width: wp(29),
    height: hp(29),
    top: hp(20),
  },
});
