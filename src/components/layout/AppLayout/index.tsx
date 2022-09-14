import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export interface AppLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

export const AppLayout: React.FC<AppLayoutProps> = ({title, children}) => {
  return (
    <SafeAreaView style={styles.appLayoutContainer}>
      <View style={styles.appLayoutWrapper}>
        <TouchableOpacity>
          <Image source={require('src/assets/privacy-exit-button.png')} />
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        {children}
      </View>
    </SafeAreaView>
  );
};
