import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SCREEN} from './constant';
import {useLogin} from './hooks';
import {HomeScreen, OnBoardingScreen} from './screens';
import {Toast} from './components';

const Stack = createNativeStackNavigator();
export const Service: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {login} = useLogin();

  useEffect(() => {
    const autoLoigin = async () => {
      const refreshToken = await AsyncStorage.getItem('@token');
      if (refreshToken) {
        login({refreshToken});
      }

      SplashScreen.hide();
    };

    autoLoigin();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN.ON_BOARDING}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
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
