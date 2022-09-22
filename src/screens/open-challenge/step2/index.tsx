/* eslint-disable react-native/no-inline-styles */
import MapboxGL from '@rnmapbox/maps';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, MapView} from 'src/components';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';
import {styles} from './styles';
import {hp, wp} from 'src/utils';
import {getLocation} from 'src/utils/getLocation';

export const OpenChallengeStep2Screen: React.FC = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);
  const {navigate} = useNavigation();
  const [range, setRange] = useState(2);
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const pointAnnontation = useRef<MapboxGL.PointAnnotation>(null);

  const handleOnChangeSliderValue = (values: number[]) => {
    setRange(values[0] + 1);
    pointAnnontation.current?.refresh();
  };

  useEffect(() => {
    (async () => {
      const {coords} = await getLocation();
      setCoordinates([coords.longitude, coords.latitude]);
    })();
  }, []);

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.topSheetContainer}>
          <TouchableOpacity
            style={styles.touchableExitImage}
            onPress={() => navigate(SCREEN.OPEN_CHALLENGE_STEP1)}>
            <Image source={require('src/assets/privacy-exit-button.png')} />
          </TouchableOpacity>
          <Text style={styles.toastContainer}>범위 지정 중 😎</Text>
        </View>
        <View style={styles.screenContainer} />
        <View style={styles.screenContainer} />
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>
            보여줄 동네 지정 중이에요 :)
          </Text>
          <Text style={styles.bottomSheetSubTitle}>
            선택한 범위의 챔린지만 볼 수 있어요.
          </Text>
          <View style={styles.sliderTextContaier}>
            <Text style={styles.sliderText}>내 동네</Text>
            <Text style={styles.sliderText}>근처 동네</Text>
          </View>
          <MultiSlider
            values={[0]}
            selectedStyle={{
              backgroundColor: '#232734',
            }}
            unselectedStyle={{
              backgroundColor: '#E0E0E0',
            }}
            containerStyle={{
              height: 40,
              borderRadius: hp(20),
            }}
            trackStyle={{
              height: 10,
              backgroundColor: 'red',
              borderRadius: hp(20),
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40,
            }}
            min={0}
            max={10}
            markerStyle={{
              backgroundColor: '#232734',
              height: hp(15),
              width: wp(15),
              bottom: hp(-5),
            }}
            sliderLength={310}
            isMarkersSeparated={true}
            onValuesChange={handleOnChangeSliderValue}
          />
          <Button
            onPress={() => navigate(SCREEN.OPEN_CHALLENGE_STEP3)}
            style={styles.button}
            label="범위 지정 완료"
          />
        </View>
      </SafeAreaView>

      <MapView cameraRef={cameraRef} style={styles.mapbox} showHeading>
        {coordinates[0] !== 0 && coordinates[1] !== 0 && (
          <MapboxGL.PointAnnotation
            ref={pointAnnontation}
            id="point_annotation"
            coordinate={coordinates}
            anchor={{x: 0, y: 0}}>
            <View
              style={{
                width: wp(25 * range),
                height: hp(25 * range),
                backgroundColor: 'rgba(185, 255, 234, 0.46)',
                borderWidth: 2,
                borderColor: '#4CFCC7',
                borderStyle: 'dashed',
                borderRadius: wp((25 * range) / 2),
              }}
            />
          </MapboxGL.PointAnnotation>
        )}
      </MapView>
    </View>
  );
};
