import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from 'src/utils';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  safeAreaView: {
    zIndex: 99,
    position: 'absolute',
    bottom: 0,
    paddingBottom: Platform.OS === 'ios' ? hp(0) : hp(20),
  },
  screenContainer: {
    flex: 1,
    position: 'relative',
  },
  mapbox: {
    flex: 1,
  },
  overlay: {
    top: hp(-720),
    marginLeft: wp(20),
    // flex: 1,
    // flexDirection: 'column-reverse',
    // alignItems: 'center',
  },
  bottomButtonCustom: {
    width: SCREEN_WIDTH - wp(50),
  },
});
