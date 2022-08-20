import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {GlobalNavigationBar} from 'src/components';

import {styles} from './styles';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.DefaultLayoutContainer}>
      <View style={styles.DefaultLayoutWrapper}>{children}</View>
      <GlobalNavigationBar />
    </SafeAreaView>
  );
};
