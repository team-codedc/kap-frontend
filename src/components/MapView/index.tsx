import MapboxGL from '@rnmapbox/maps';
import {CameraRef} from '@rnmapbox/maps/javascript/components/Camera';
import React, {useEffect, useState} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {getLocation} from 'src/utils/getLocation';

interface Location {
  lat: number;
  lng: number;
  heading: number | null;
  speed: number | null;
}

export interface MapViewProps {
  cameraRef?: React.RefObject<CameraRef>;
  children?: React.ReactNode;
  showHeading?: boolean;
  style?: StyleProp<ViewStyle>;
  styleURL?: string;
  updateUserLocationInterval?: number;
}

export const MapView: React.FC<MapViewProps> = ({
  cameraRef,
  children,
  showHeading,
  style,
  styleURL = 'mapbox://styles/hanseo0507/cl71ocl8q000015td0zgfengv',
  updateUserLocationInterval = 1000,
}) => {
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lng: 0,
    heading: 0,
    speed: 0,
  });

  useEffect(() => {
    /* Update User Location per time(updateUserLocationInterval) */
    const interval = setInterval(async () => {
      const {coords} = await getLocation();
      setLocation({
        lat: coords.latitude,
        lng: coords.longitude,
        heading: coords.heading,
        speed: coords.speed,
      });
    }, updateUserLocationInterval);

    return () => clearInterval(interval);
  }, [updateUserLocationInterval]);

  return (
    <MapboxGL.MapView
      style={style}
      styleURL={styleURL}
      logoEnabled={false}
      attributionEnabled={false}
      scaleBarEnabled={false}
      localizeLabels={true}>
      <MapboxGL.UserLocation>
        <MapboxGL.SymbolLayer
          id="user_location"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            iconImage:
              showHeading && location.heading !== null
                ? require('src/assets/mapbox/location-with-heading.png')
                : require('src/assets/mapbox/location.png'),
            iconSize: 0.8,
            iconRotate: location.heading !== null ? location.heading : 0,
            iconRotationAlignment: 'map',
            iconAllowOverlap: true,
            iconOffset: showHeading ? [-5, -25] : [0, 0],
          }}
        />
      </MapboxGL.UserLocation>

      <MapboxGL.Camera
        ref={cameraRef}
        centerCoordinate={[location.lng, location.lat]}
        followUserMode="compass"
        maxBounds={{
          ne: [124, 38],
          sw: [132, 33],
        }}
      />
      {children}
    </MapboxGL.MapView>
  );
};
