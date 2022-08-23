import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {GlobalNavigationBar} from 'src/components';

import {styles} from './styles';

export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.defaultLayoutContainer}>
      <View style={styles.defaultLayoutWrapper}>{children}</View>
      <GlobalNavigationBar />
    </SafeAreaView>
  );
};
