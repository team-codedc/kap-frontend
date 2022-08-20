import {StyleSheet} from 'react-native';
import {wp} from 'src/utils';

export const styles = StyleSheet.create({
  DefaultLayoutContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  DefaultLayoutWrapper: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: wp(25),
  },
});
