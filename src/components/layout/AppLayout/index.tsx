import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from 'src/hooks';
import {styles} from './styles';

export interface AppLayoutProps {
  children?: React.ReactNode;
  title?: string;
  direction?: 'row' | 'column';
  route?: string | any;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  title,
  direction = 'column',
  children,
  route,
}) => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.appLayoutContainer}>
      {direction === 'row' ? (
        <View style={styles.appLayoutWrapper}>
          <View>
            <TouchableOpacity
              onPress={() => navigate(route)}
              style={styles.directionRowContainer}>
              <Image source={require('src/assets/privacy-exit-button.png')} />
              {title && <Text style={styles.rowTitle}>{title}</Text>}
            </TouchableOpacity>
          </View>
          {children}
        </View>
      ) : (
        <View style={styles.appLayoutWrapper}>
          <View>
            <TouchableOpacity onPress={() => navigate(route)}>
              <Image source={require('src/assets/privacy-exit-button.png')} />
            </TouchableOpacity>
            {title && <Text style={styles.rowTitle}>{title}</Text>}
          </View>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};
