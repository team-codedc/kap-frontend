import React from 'react';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import MapboxGL from '@rnmapbox/maps';

import {useApiError} from './hooks';
import {Service} from './Service';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaGFuc2VvMDUwNyIsImEiOiJja3U2ZXVtZGUwZm9vMnBwYXNvY2VweDFtIn0.rdqGjFltqrlkS-V9sEWrfg',
);

GoogleSignin.configure({
  scopes: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ],
  webClientId:
    '694755819827-sr7i8bj4i25cfnfep5q7k0ojlctkub6k.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  iosClientId:
    '694755819827-jk29k03t00tii7824kjv0bakcmfvgjri.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

const App = () => {
  const {handlerError} = useApiError();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: handlerError,
      },
      mutations: {
        onError: handlerError,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Service />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
