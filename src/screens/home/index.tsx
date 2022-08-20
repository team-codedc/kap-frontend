import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSetRecoilState} from 'recoil';
import {Button} from 'src/components';
import {globalAccessTokenState} from 'src/store';

export const HomeScreen: React.FC = () => {
  const queryClient = useQueryClient();
  const setGlobalAccessToken = useSetRecoilState(globalAccessTokenState);

  const clearRefreshToken = async () => {
    queryClient.getQueryCache().clear();
    setGlobalAccessToken('');
    await AsyncStorage.setItem('@token', '');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello, World!</Text>
        <Button label="로그아웃" onPress={clearRefreshToken} />
      </View>
    </SafeAreaView>
  );
};
