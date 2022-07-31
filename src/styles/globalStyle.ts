import {StyleSheet} from 'react-native';
import {wp} from 'src/utils';

export const globalStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingHorizontal: wp(25),
  },

  screenContainer: {
    flex: 1,
  },
});
