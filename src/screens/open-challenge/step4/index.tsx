import React from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'src/components';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';
import {globalStyles} from 'src/styles';
import {styles} from './styles';

export const OpenChallengeStep4Screen: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <View style={styles.openChanllengeStep5Container}>
        <Image
          style={styles.openChanllengeStep5Image}
          source={require('src/assets/3d-fluency-ok.png')}
        />
        <Text style={styles.openChanllengeStep5Title}>챌린지 생성 완료!</Text>
        <Text style={styles.openChanllengeStep5Description}>
          챌린지를 만드셨네요.{'\n'} 목표에 도달하시기를 바랄게요!
        </Text>
      </View>
      <Button
        style={styles.footerButton}
        label="돌아가기"
        onPress={() => navigate(SCREEN.HOME)}
      />
    </SafeAreaView>
  );
};
