import React from 'react';
import {View} from 'react-native';
import {AppLayout, Button, Input} from 'src/components';
import {styles} from './styles';

export const PrivacyScreen: React.FC = () => {
  return (
    <AppLayout title="개인정보입력">
      <Input label="닉네임" />
      <Input label="이메일" />
      <Input label="생년월일" />
      <View style={styles.privacyButtonWrapper}>
        <Button label="다음으로" />
      </View>
    </AppLayout>
  );
};
