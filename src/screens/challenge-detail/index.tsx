import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import {AppLayout, Button as CommonButton} from 'src/components';
import Toast from 'react-native-toast-message';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';

import {styles} from './styles';

export const ChallengeDetailScreen: React.FC = () => {
  const {navigate} = useNavigation();

  const onSubmit = () => {
    navigate(SCREEN.HOME);
    Toast.show({
      type: 'success',
      text1: '챌린지가 시작되었습니다! :)',
    });
  };

  return (
    <AppLayout>
      <ScrollView>
        <View style={styles.challengeDetailWrapper}>
          <View style={styles.challengeDetailTitleContainer}>
            <View style={styles.challengeDetailTitleWrapper}>
              <Text style={styles.challengeDetailTitleText}>
                한강 가는 길을 변화 시켜요!
              </Text>
              <Image source={require('src/assets/link-horizontal.png')} />
            </View>
            <View style={styles.challengeDetailParticipantWrapper}>
              <Image
                source={require('src/assets/gnb-profile-button.png')}
                style={styles.challengeDetailParticipantIcon}
              />
              <Text style={styles.challengeDetailParticipantText}>
                32명 참여
              </Text>
            </View>
            <Text style={styles.challengeDetailGategory}>ETC</Text>
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
              최근들어 한강 길이 너무 더러워지고 있어요. 특히 쓰레기 문제가 가장
              심각한 원인인데 혹시 같이 분리수거 하면서 환경에 도움 줄 사람
              없을까요?
            </Text>
            <Text style={styles.challengeDetailDescriptionText}>
              실제로 코로나19 이후 사회적 거리두기가 장기간 시행되면서 야외
              공간을 찾는 한강공원 방문객 수가 늘면서 일회용 배달용기와 음식물
              쓰레기, 담배꽁초와 플라스틱 컵 등 잔디나 도로 위 무단투기되는
              쓰레기 양도 더욱 증가하고 있어요. 또한 취식 행위 후 나온
              쓰레기들을 제대로 처리하지 않고 자리에 두고가거나 아무 곳에나
              버려, 미화원이 수작업으로 일일이 2차 분리를 진행하고 있습니다.
            </Text>
          </View>
          <View>
            <Text style={styles.challengeDetailCertification}>인증 규칙</Text>
            <Text style={styles.challengeDetailCertificationText}>
              한강에서 분리수거 하는 모습 캡처
            </Text>
            <Text style={styles.challengeDetailCertificationCapture}>
              등록된 사진이 {'\n'}없어요
            </Text>
          </View>
          <View style={styles.challengeDetailFooterButton}>
            <CommonButton label="바로 챌린지 시작하기" onPress={onSubmit} />
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};
