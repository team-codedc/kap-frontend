import React from 'react';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {useApiError} from './hooks';
import {Service} from './Service';

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
