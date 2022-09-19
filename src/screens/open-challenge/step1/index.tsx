import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {AppLayout} from 'src/components';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';
import {styles} from './styles';

export const OpenChallengeStep1Screen: React.FC = () => {
  const {navigate} = useNavigation();

  const CHALLENGE_CATEGORY_ITEMS = [
    {
      text: '나만의 카테고리로 시작할래요!',
      icon: require('src/assets/3d-fluency-idea.png'),
      category: 'etc',
    },
  ];

  return (
    <AppLayout route={SCREEN.HOME}>
      <View style={styles.openChallengeContainer}>
        <Text style={styles.onChallengeNewCaption}>new</Text>
        <Text style={styles.openChallengeBoldText}>
          유저들과 함께 환경을 지킬
        </Text>
        <Text style={styles.openChallengeRegularText}>미션을 만들어봐요!</Text>
      </View>
      <View style={styles.openChallengeContainer}>
        {CHALLENGE_CATEGORY_ITEMS.map(item => {
          return (
            <TouchableOpacity
              onPress={() => navigate(SCREEN.OPEN_CHALLENGE_STEP3)}
              style={styles.openChallengeCategoryButton}
              activeOpacity={0.6}>
              <Image source={item.icon} />
              <Text
                style={styles.openChallengeText}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://tally.so/r/mD4Rk5')}
        activeOpacity={0.6}
        style={styles.openChallengeContainer}>
        <Text style={styles.openChallengeCategory}>
          다른 환경 미션 카테고리를 만들고싶으면?
        </Text>
      </TouchableOpacity>
    </AppLayout>
  );
};
