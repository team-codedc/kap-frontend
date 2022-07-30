import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello, World!</Text>
      </View>
    </SafeAreaView>
  );
};
