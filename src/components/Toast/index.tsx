import React from 'react';
import {Platform} from 'react-native';
import {
  default as ToastMessage,
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

import {styles} from './styles';

const forAndroidStyles = Platform.OS === 'android' ? styles.forAndroid : {};

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      style={[styles.baseToast, styles.successToast, forAndroidStyles]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      style={[styles.baseToast, styles.errorToast, forAndroidStyles]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast
      style={[styles.baseToast, styles.infoToast, forAndroidStyles]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.toastText1}
      text2Style={styles.toastText2}
      {...props}
    />
  ),
  warning: (props: BaseToastProps) => (
    <BaseToast
      style={[styles.baseToast, styles.warningToast, forAndroidStyles]}
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
