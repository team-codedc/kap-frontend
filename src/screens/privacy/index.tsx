import React from 'react';
import {Text, View} from 'react-native';
import {AppLayout, Button, Input} from 'src/components';
import {styles} from './styles';

export const PrivacyScreen: React.FC = () => {
  return (
    <AppLayout>
      <Text style={styles.privacyPageTitle}>개인정보 입력</Text>
      <Input label="닉네임" />
      <Input label="이메일" />
      <Input label="생년월일" />
      <View style={styles.privacyButtonWrapper}>
        <Button label="다음으로" />
      </View>
    </AppLayout>
  );
};
