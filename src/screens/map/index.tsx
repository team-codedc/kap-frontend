import MapboxGL from '@rnmapbox/maps';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const MapScreen: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <MapboxGL.MapView
        style={styles.mapbox}
        styleURL="mapbox://styles/hanseo0507/cl71ocl8q000015td0zgfengv"
        logoEnabled={false}
        attributionEnabled={false}
        scaleBarEnabled={false}
      />
    </View>
  );
};
