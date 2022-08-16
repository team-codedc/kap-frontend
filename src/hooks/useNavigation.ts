import {useNavigation as useOriginalNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from 'src/constant';

export const useNavigation = <K extends keyof StackParamList>() => {
  return useOriginalNavigation<NativeStackNavigationProp<StackParamList, K>>();
};
