import MapboxGL from '@rnmapbox/maps';
import React, {useRef} from 'react';
import {Image, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSetRecoilState} from 'recoil';
import {MapView} from 'src/components';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';
import {useAllChallenge} from 'src/hooks/query/useChallenge';
import {globalChallengeDetailIdState} from 'src/store';
import {styles} from './styles';

export const MapScreen: React.FC = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);
  const {width} = useWindowDimensions();
  const {navigate} = useNavigation();
  const {data: challenge} = useAllChallenge();
  const setDetailChallengeId = useSetRecoilState(globalChallengeDetailIdState);

  const onTest = (event: any) => {
    setDetailChallengeId(event);
    return navigate(SCREEN.CHALLENGE_DETAIL);
  };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={[styles.safeAreaView, {width}]} edges={['bottom']}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => navigate(SCREEN.HOME)}>
          <Image source={require('src/assets/privacy-exit-button.png')} />
        </TouchableOpacity>
      </SafeAreaView>
      <MapView cameraRef={cameraRef} style={styles.mapbox} showHeading>
        <View>
          <MapboxGL.ShapeSource
            id="test"
            shape={{
              type: 'FeatureCollection',
              features: challenge?.map(v => ({
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [v.lat, v.lng]},
                id: v.id,
                properties: {
                  ...v,
                },
              })),
            }}
            onPress={event => onTest(event)}>
            <MapboxGL.SymbolLayer
              id="pointCount_Active"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                iconImage: 'https://i.imgur.com/K5mevsr.png',
                iconSize: 0.13,
                iconRotationAlignment: 'map',
              }}
            />
            <MapboxGL.SymbolLayer
              id="pointCount"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                iconImage: 'https://i.imgur.com/K5mevsr.png',
                iconSize: 0.12,
                iconRotationAlignment: 'map',
                iconAllowOverlap: true,
              }}
            />
          </MapboxGL.ShapeSource>
        </View>
      </MapView>
    </View>
  );
};
