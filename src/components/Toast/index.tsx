import React from 'react';
import {
  default as ToastMessage,
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

import {styles} from './styles';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      style={[styles.baseToast, styles.successToast]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      style={[styles.baseToast, styles.errorToast]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast
      style={[styles.baseToast, styles.infoToast]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
  warning: (props: BaseToastProps) => (
    <BaseToast
      style={[styles.baseToast, styles.warningToast]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
};

export const Toast: React.FC = () => {
  return <ToastMessage config={toastConfig} visibilityTime={2500} />;
};
