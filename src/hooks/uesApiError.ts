import {useCallback} from 'react';
import Toast from 'react-native-toast-message';

type ErrorHandlerKVType = {
  [key: string]: () => void;
};

const defaultHandlers: ErrorHandlerKVType = {
  common: () => {
    Toast.show({
      type: 'error',
      text1: '일시적인 오류가 발생했어요',
      text2: '계속 오류가 발생한다면, 개발팀에 문의해주세요',
    });
  },
  default: () => '',
};

export const useApiError = () => {
  const handlerError = useCallback((error: any) => {
    const httpStatus = error.status as string;

    switch (true) {
      case defaultHandlers[httpStatus] !== undefined:
        defaultHandlers[httpStatus]();
        break;
      default:
        defaultHandlers.default();
    }

    defaultHandlers.common();
  }, []);

  return {handlerError};
};
