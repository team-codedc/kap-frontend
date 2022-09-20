import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import {DefaultLayout} from 'src/components/layout';
import {HomeContentsScreen} from '../home-contents';

import {styles} from './styles';

export const HomeScreen: React.FC = () => {
  return (
    <DefaultLayout>
      <View style={styles.homeScreenWrapper}>
        <View style={styles.homeScreenHeaderWrapper}>
          <View style={styles.homeScreenHeaderRegionWrapper}>
            <Image
              source={require('../../assets/map-pin.png')}
              style={styles.homeScreenHeaderMapPinIcon}
            />
            <Text style={styles.homeScreenHeaderRegion}>서울특별시 마포구</Text>
          </View>

          <View style={styles.homeScreenHeaderProfileWrapper}>
            <Image
              source={require('../../assets/kakao.png')}
              style={styles.homeScreenHeaderProfileIcon}
            />
            <Text style={styles.homeScreenHeaderProfileUserName}>최민기님</Text>
          </View>
        </View>

        <View style={styles.homeScreenOptionWrapper}>
          <TouchableOpacity style={styles.homeScreenOptionButton}>
            <Text style={styles.homeScreenOptionFont}>챌린지</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.homeScreenOptionFont}>모임</Text>
          </TouchableOpacity>
        </View>
      </View>
      <HomeContentsScreen />
    </DefaultLayout>
  );
};
