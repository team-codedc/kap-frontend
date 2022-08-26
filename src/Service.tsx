import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SCREEN, StackParamList} from './constant';
import {useProfile} from './hooks';
import {MapScreen, OnBoardingScreen} from './screens';
import {Toast} from './components';
import {useRecoilState} from 'recoil';
import {globalAccessTokenState} from './store';

const Stack = createNativeStackNavigator<StackParamList>();

export const Service: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {isFetched} = useProfile();
  const [globalAccessToken] = useRecoilState(globalAccessTokenState);

  useEffect(() => {
    if (isFetched) {
      SplashScreen.hide();
    }
  }, [isFetched]);

  if (!isFetched) {
    return <View />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={globalAccessToken ? SCREEN.MAP : SCREEN.ON_BOARDING}
          screenOptions={{headerShown: false}}>
          {globalAccessToken ? (
            <>
              {/*<Stack.Screen name={SCREEN.HOME} component={HomeScreen} />*/}
              <Stack.Screen name={SCREEN.MAP} component={MapScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name={SCREEN.ON_BOARDING}
                component={OnBoardingScreen}
              />
            </>
          )}
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
