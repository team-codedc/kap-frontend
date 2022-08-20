import {Dimensions, StyleSheet} from 'react-native';
import {wp} from 'src/utils';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  safeAreaView: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
  },
  mapbox: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  bottomButtonCustom: {
    width: SCREEN_WIDTH - wp(50),
  },
});
