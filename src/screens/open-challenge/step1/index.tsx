import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from 'src/styles';
import {styles} from './styles';

export const OpenChallengeStep1Screen: React.FC = () => {
  const CHALLENGE_CATEGORY_ITEMS = [
    {
      text: '나만의 카테고리로 시작할래요!',
      icon: require('src/assets/on-board-1.png'),
      category: 'etc',
    },
    {
      text: '분리수거 챌린지를 만들고 싶어요!',
      icon: require('src/assets/on-board-1.png'),
      category: 'separateTheTrash',
    },
    {
      text: '걷기 챌린지를 만들고 싶어요!',
      icon: require('src/assets/on-board-2.png'),
      category: 'walking',
    },
    {
      text: '샴푸 줄이기 챌린지를 만들고 싶어요!',
      icon: require('src/assets/on-board-3.png'),
      category: 'reduceShampoo',
    },
  ];

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <View style={globalStyles.screenContainer}>
        <View style={styles.openChallengeContainer}>
          <Text style={styles.onChallengeNewCaption}>new</Text>
          <Text style={styles.openChallengeBoldText}>
            유저들과 함께 환경을 지킬
          </Text>
          <Text style={styles.openChallengeRegularText}>
            미션을 만들어봐요!
          </Text>
        </View>
        <View style={styles.openChallengeContainer}>
          {CHALLENGE_CATEGORY_ITEMS.map(item => {
            return (
              <TouchableOpacity activeOpacity={0.6}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.openChallengeCategoryButton}>
                  <Image source={item.icon} />
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.openChallengeContainer}>
          <Text style={styles.openChallengeCategory}>
            다른 환경 미션 카테고리를 만들고싶으면?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
