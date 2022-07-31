import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen, OnBoardingScreen} from './screens';
import {SCREEN} from './constant';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(timer);
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
