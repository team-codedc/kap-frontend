import AsyncStorage from '@react-native-async-storage/async-storage';
import MapboxGL from '@rnmapbox/maps';
import {useQueryClient} from '@tanstack/react-query';
import React, {useRef} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSetRecoilState} from 'recoil';
import {Button, MapView} from 'src/components';
import {globalAccessTokenState} from 'src/store';
import {styles} from './styles';

export const MapScreen: React.FC = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);
  const queryClient = useQueryClient();
  const {width} = useWindowDimensions();
  const setGlobalAccessToken = useSetRecoilState(globalAccessTokenState);

  const handlePressLogout = async () => {
    queryClient.getQueryCache().clear();
    setGlobalAccessToken('');
    await AsyncStorage.setItem('@token', '');
  };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={[styles.safeAreaView, {width}]} edges={['bottom']}>
        <View style={styles.overlay}>
          <Button
            label="로그아웃"
            style={styles.bottomButtonCustom}
            onPress={handlePressLogout}
          />
        </View>
      </SafeAreaView>
      <MapView cameraRef={cameraRef} style={styles.mapbox} showHeading />
    </View>
  );
};
