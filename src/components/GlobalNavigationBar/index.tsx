import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {GLOBAL_NAVIGATION_BAR} from 'src/constant';
import {useNavigation} from 'src/hooks';
import {styles} from './styles';

export const GlobalNavigationBar: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.globalNavigationBarWrapper}>
        {GLOBAL_NAVIGATION_BAR.map(content => {
          return (
            <TouchableOpacity onPress={() => navigate(content.id)}>
              <View style={styles.globalNavigationBarContentsWrapper}>
                <Image
                  source={content.icon}
                  style={styles.globalNavigationBarIcon}
                />
                <Text style={styles.globalNavigationBarDescription}>
                  {content.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
