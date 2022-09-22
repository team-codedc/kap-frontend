import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import {AppLayout, Button as CommonButton} from 'src/components';
import Toast from 'react-native-toast-message';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';

import {styles} from './styles';
import {useDetailChallenge} from 'src/hooks/query/useChallenge';
import {getJoinChallenge} from 'src/api/challenge';

export const ChallengeDetailScreen: React.FC = () => {
  const {navigate} = useNavigation();
  const {data: challenge}: any = useDetailChallenge();

  const onSubmit = () => {
    console.log(challenge.id);
    getJoinChallenge(challenge.id)
      .then(() => {
        navigate(SCREEN.HOME);
        Toast.show({
          type: 'success',
          text1: '챌린지가 시작되었습니다! :)',
        });
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: '이미 챌린지에 참여하고 있어요:)',
        });
      });
  };

  return (
    <AppLayout route={SCREEN.MAP}>
      <ScrollView>
        <View style={styles.challengeDetailWrapper}>
          <View style={styles.challengeDetailTitleContainer}>
            <View style={styles.challengeDetailTitleWrapper}>
              <Text style={styles.challengeDetailTitleText}>
                {challenge?.name}
              </Text>
              <Image source={require('src/assets/link-horizontal.png')} />
            </View>
            <View style={styles.challengeDetailParticipantWrapper}>
              <Image
                source={require('src/assets/gnb-profile-button.png')}
                style={styles.challengeDetailParticipantIcon}
              />
              <Text style={styles.challengeDetailParticipantText}>
                {challenge?.members.length}명 참여
              </Text>
            </View>
            <Text style={styles.challengeDetailGategory}>
              {challenge?.category}
            </Text>
          </View>
          <View style={styles.challengeDetailPeriodWrapper}>
            <Text style={styles.challengeDetailPeriod}>챌린지 기간</Text>
            <Text style={styles.challengeDeatilPeriodText}>
              8월 22일(월) ~ 9월 4일(일) 공휴일 제외
            </Text>
          </View>
          <View style={styles.challengeDetailDescriptionWrapper}>
            <Text style={styles.challengeDetailDescription}>챌린지 설명</Text>
            <Text style={styles.challengeDetailDescriptionText}>
              {challenge?.description}
            </Text>
          </View>
          <View>
            <Text style={styles.challengeDetailCertification}>인증 규칙</Text>
            <Text style={styles.challengeDetailCertificationText}>
              {challenge?.rule}
            </Text>
            <Text style={styles.challengeDetailCertificationCapture}>
              등록된 사진이 {'\n'}없어요
            </Text>
          </View>
          <View style={styles.challengeDetailFooterButton}>
            <CommonButton label="챌린지 시작하기" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};