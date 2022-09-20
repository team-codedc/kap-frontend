import MapboxGL from '@rnmapbox/maps';
import React, {useRef} from 'react';
import {Image, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MapView} from 'src/components';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';
// import {globalAccessTokenState} from 'src/store';
import {styles} from './styles';

export const MapScreen: React.FC = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);
  // const queryClient = useQueryClient();
  const {width} = useWindowDimensions();
  // const setGlobalAccessToken = useSetRecoilState(globalAccessTokenState);
  const {navigate} = useNavigation();

  // const handlePressLogout = async () => {
  //   queryClient.getQueryCache().clear();
  //   setGlobalAccessToken('');
  //   await AsyncStorage.setItem('@token', '');
  // };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={[styles.safeAreaView, {width}]} edges={['bottom']}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => navigate(SCREEN.HOME)}>
          <Image source={require('src/assets/privacy-exit-button.png')} />
        </TouchableOpacity>
        {/* <View style={styles.overlay} /> */}
      </SafeAreaView>
      <MapView cameraRef={cameraRef} style={styles.mapbox} showHeading />
    </View>
  );
};
