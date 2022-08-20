import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

export const GlobalNavigationBar: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.GNBWrapper}>
        <View style={styles.GNBContentsWrapper}>
          <Image
            style={styles.GNBIcon}
            source={require('src/assets/gnb-home-button.png')}
          />
          <Text style={styles.GNBDescription}>홈</Text>
        </View>
        <View style={styles.GNBContentsWrapper}>
          <Image
            style={styles.GNBIcon}
            source={require('src/assets/gnb-map-button.png')}
          />
          <Text style={styles.GNBDescription}>지도</Text>
        </View>
        <View style={styles.GNBContentsWrapper}>
          <Image
            style={styles.GNBIcon}
            source={require('src/assets/gnb-community-button.png')}
          />
          <Text style={styles.GNBDescription}>커뮤니티</Text>
        </View>
        <View style={styles.GNBContentsWrapper}>
          <Image
            style={styles.GNBIcon}
            source={require('src/assets/gnb-market-button.png')}
          />
          <Text style={styles.GNBDescription}>마켓</Text>
        </View>
        <View style={styles.GNBContentsWrapper}>
          <Image
            style={styles.GNBIcon}
            source={require('src/assets/gnb-profile-button.png')}
          />
          <Text style={styles.GNBDescription}>마이환경</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
