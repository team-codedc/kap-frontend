import {StyleSheet} from 'react-native';
import {wp} from 'src/utils';

export const styles = StyleSheet.create({
  defaultLayoutContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  defaultLayoutWrapper: {
    width: '100%',
    backgroundColor: '#F7F7F7',
    padding: wp(27),
    borderRadius: 17,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 2,
    borderTopColor: '#EEEEEE',
    borderTopWidth: 2,
  },
});
