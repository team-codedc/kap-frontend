import MapboxGL from '@rnmapbox/maps';
import React, {useRef} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {MapView} from 'src/components';
import {styles} from './styles';

export const OpenChallengeStep2Screen: React.FC = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);

  return (
    <SafeAreaView>
      <MapView cameraRef={cameraRef} style={styles.mapbox} showHeading />
    </SafeAreaView>
  );
};
