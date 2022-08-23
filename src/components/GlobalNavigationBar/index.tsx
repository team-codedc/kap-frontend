import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {GLOBAL_NAVIGATION_BAR} from 'src/constant';
import {styles} from './styles';

export const GlobalNavigationBar: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.globalNavigationBarWrapper}>
        {GLOBAL_NAVIGATION_BAR.map(content => {
          return (
            <View style={styles.globalNavigationBarContentsWrapper}>
              <Image
                source={content.icon}
                style={styles.globalNavigationBarIcon}
              />
              <Text style={styles.globalNavigationBarDescription}>
                {content.text}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
