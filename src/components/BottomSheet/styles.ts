import {StyleSheet} from 'react-native';
import {colors, SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  background: {
    flex: 1,
  },

  bottomSheetContainer: {
    paddingHorizontal: wp(25),
    paddingVertical: hp(35),
    paddingBottom: hp(50),
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    backgroundColor: 'white',
    zIndex: 99,
  },

  bottomSheetTitle: {
    color: colors.text.primary,
    fontSize: fp(18),
    fontFamily: SpoqaHanSansNeo.medium,
    marginBottom: hp(24),
    letterSpacing: wp(-0.5),
  },
});
