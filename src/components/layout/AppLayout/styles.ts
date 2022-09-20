import {StyleSheet} from 'react-native';
import {SpoqaHanSansNeo} from 'src/styles';
import {fp, hp, wp} from 'src/utils';

export const styles = StyleSheet.create({
  directionRowContainer: {
    flexDirection: 'row',
    marginBottom: hp(30),
  },
  title: {
    fontSize: fp(25),
    fontFamily: SpoqaHanSansNeo.bold,
    color: '#000000',
    marginBottom: hp(30),
    marginTop: hp(10),
  },
  rowTitle: {
    marginLeft: wp(10),
    color: '#000000',
    fontSize: fp(20),
    fontFamily: SpoqaHanSansNeo.regular,
    textAlignVertical: 'center',
  },
  appLayoutContainer: {
    flex: 2,
  },
  appLayoutWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: hp(25),
    paddingRight: wp(25),
    paddingLeft: wp(25),
  },
  layoutExitButton: {
    width: wp(29),
    height: hp(29),
    top: hp(20),
  },
});
