import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SCREEN, StackParamList} from './constant';
import {useProfile} from './hooks';
import {HomeScreen, MapScreen, OnBoardingScreen} from './screens';
import {Toast} from './components';

const Stack = createNativeStackNavigator<StackParamList>();

export const Service: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {isFetched} = useProfile();

  useEffect(() => {
    if (isFetched) {
      SplashScreen.hide();
    }
  }, [isFetched]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN.MAP}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
          <Stack.Screen name={SCREEN.MAP} component={MapScreen} />
          <Stack.Screen
            name={SCREEN.ON_BOARDING}
            component={OnBoardingScreen}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
