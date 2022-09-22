import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {SCREEN, StackParamList} from './constant';
import {useProfile} from './hooks';
import {Toast} from './components';
import {
  ChallengeDetailScreen,
  HomeScreen,
  MapScreen,
  MyChallenge,
  OnBoardingScreen,
  OpenChallengeStep1Screen,
  OpenChallengeStep2Screen,
  OpenChallengeStep3Screen,
  OpenChallengeStep4Screen,
  ViewMoreChallengeScreen,
} from './screens';
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
          initialRouteName={
            globalAccessToken ? SCREEN.HOME : SCREEN.ON_BOARDING
          }
          screenOptions={{headerShown: false}}>
          {globalAccessToken ? (
            <>
              <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
              <Stack.Screen name={SCREEN.MAP} component={MapScreen} />
              <Stack.Screen
                name={SCREEN.MY_CHALLENGE}
                component={MyChallenge}
              />
              <Stack.Screen
                name={SCREEN.OPEN_CHALLENGE_STEP1}
                component={OpenChallengeStep1Screen}
              />
              <Stack.Screen
                name={SCREEN.OPEN_CHALLENGE_STEP2}
                component={OpenChallengeStep2Screen}
              />
              <Stack.Screen
                name={SCREEN.OPEN_CHALLENGE_STEP3}
                component={OpenChallengeStep3Screen}
              />
              <Stack.Screen
                name={SCREEN.OPEN_CHALLENGE_STEP4}
                component={OpenChallengeStep4Screen}
              />
              <Stack.Screen
                name={SCREEN.CHALLENGE_DETAIL}
                component={ChallengeDetailScreen}
              />
              <Stack.Screen
                name={SCREEN.VIEW_MORE_CHALLENGE}
                component={ViewMoreChallengeScreen}
              />
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
