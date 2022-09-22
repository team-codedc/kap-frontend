import MapboxGL from '@rnmapbox/maps';
import {CameraRef} from '@rnmapbox/maps/javascript/components/Camera';
import React, {useEffect, useState} from 'react';
import {Platform, StyleProp, ViewStyle} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {globalUserLcoation} from 'src/store';

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
  styleURL = 'mapbox://styles/rlaeodnr1011/cl8af66c1000t15obdpwh5mzo',
  updateUserLocationInterval = 1000,
}) => {
  const setGlobalLocation = useSetRecoilState(globalUserLcoation);
  const [location, setLocation] = useState<Location>({
    lat: 0,
    lng: 0,
    heading: 0,
    speed: 0,
  });
  const [cameraCenterCoords, setCameraCenterCoords] =
    useState<[number, number]>();

  const getFormattedLocation = async () => {
    const {coords} = await getLocation();
    return {
      lat: coords.latitude,
      lng: coords.longitude,
      heading: coords.heading,
      speed: coords.speed,
    };
  };

  useEffect(() => {
    (async () => {
      const locationData = await getFormattedLocation();
      setCameraCenterCoords([locationData.lng, locationData.lat]);
      setGlobalLocation({lng: locationData.lng, lat: locationData.lat});
    })();
  }, []);

  useEffect(() => {
    /* Update User Location per time(updateUserLocationInterval) */
    const interval = setInterval(async () => {
      const locationData = await getFormattedLocation();
      setLocation(locationData);
    }, updateUserLocationInterval);

    return () => clearInterval(interval);
  }, [updateUserLocationInterval]);

  /**
   * 현재 구현된 기능으로는 유저 액션 이후, 카메라가 사용자 위치로 되돌아가지 않음.
   * rnmapbox에서 지원하는 Follow 기능과 timeout을 이용해
   * 일정 시간 이상 유저 액션이 없는 경우 사용자의 위치로 이동할 수 있도록 작업함.
   * ! 아래 컴포넌트 렌더링 쪽 주석 처리된 코드는 모두 본 기능에 필요한 코드들임 !
   *
   * 버리긴 아까워서 주석처리로 남겨둡니다.
   */

  /*
  const FOLLOW_USER_TIMEOUT_MILLISECONDS = 30 * 1000;
  const [isTouching, setIsTouching] = useState<boolean>(false);
  const [followUserLocation, setFollowUserLocation] = useState<boolean>(true);

 useEffect(() => {
    if (!isTouching) {
      setFollowUserLocation(false);

      const timer = setTimeout(() => {
        setIsTouching(false);
        setFollowUserLocation(true);
      }, FOLLOW_USER_TIMEOUT_MILLISECONDS);

      return () => clearTimeout(timer);
    }
  }, [isTouching]);
  */

  return (
    <MapboxGL.MapView
      style={style}
      styleURL={styleURL}
      logoEnabled={false}
      attributionEnabled={false}
      scaleBarEnabled={false}
      localizeLabels={true}
      zoomEnabled={true}
      // onTouchStart={() => setIsTouching(true)}
      // onTouchEnd={() => setIsTouching(false)}
    >
      <MapboxGL.UserLocation>
        <MapboxGL.SymbolLayer
          id="user_location"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            iconImage:
              showHeading && location.heading !== null
                ? require('src/assets/mapbox/location-with-heading.png')
                : require('src/assets/mapbox/location.png'),
            iconSize: Platform.OS == 'ios' ? 0.93 : 2,
            iconRotate: location.heading !== null ? location.heading : 0,
            iconRotationAlignment: 'map',
            iconAllowOverlap: true,
            iconOffset: showHeading ? [-5, -25] : [0, 0],
          }}
        />
      </MapboxGL.UserLocation>

      <MapboxGL.Camera
        ref={cameraRef}
        zoomLevel={13}
        centerCoordinate={cameraCenterCoords}
        animationDuration={3000}
        // followZoomLevel={15}
        // followUserMode={Platform.OS === 'ios' ? 'compass' : 'course'}
        // followUserLocation={followUserLocation}
        maxBounds={{
          ne: [124, 38],
          sw: [132, 33],
        }}
      />
      {children}
    </MapboxGL.MapView>
  );
};
