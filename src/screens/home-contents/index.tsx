import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {HOME_CATEGORY} from 'src/constant/HomeCategory';

import {styles} from './styles';

export const HomeContentsScreen: React.FC = () => {
  return (
    <View style={styles.homeContentsScreenWrapper}>
      <ScrollView
        horizontal={true}
        style={styles.homeContentsScreenChoiceBarWrapper}>
        <TouchableOpacity>
          <Text style={styles.homeContentsScreenChoiceBarFont}>전체</Text>
        </TouchableOpacity>
        {HOME_CATEGORY.map(content => {
          return (
            <TouchableOpacity>
              <Text style={styles.homeContentsScreenChoiceBarFontFocused}>
                {content.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.homeContentsScreenParticipationWrapper}>
        <Text style={styles.homeContentsScreenParticipationText}>
          현재 참여중인 챌린지입니다.
        </Text>
      </View>

      <View style={styles.homeContentsScreenContentContainer}>
        {Array.from(Array(4).keys()).map(_ => {
          return (
            <TouchableOpacity style={styles.homeContentsScreenContentWrapper}>
              <Image source={require('src/assets/challenge-image.png')} />
              <Text style={styles.homeContentsScreenContentDescription}>
                한강 청소하기
              </Text>
              <Text style={styles.homeContentsScreenContentDateText}>
                오늘 시작한 챌린지에요 :)
              </Text>
              <View style={styles.homeContentsScreenContentTagWrapper}>
                <Text style={styles.homeContentsScreenContentTag}>
                  오늘부터
                </Text>
                <Text style={styles.homeContentsScreenContentTag}>
                  오늘부터
                </Text>
                <Text style={styles.homeContentsScreenContentTag}>
                  오늘부터
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.homeContentsScreenChallengeButton}>
          <Text style={styles.homeContentsScreenChallengeButtonText}>
            챌린지 더보기
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeContentsScreenMyChallengeContainer}>
        <View style={styles.homeContentsScreenMyChallengeWrapper}>
          <Text style={styles.homeContentsScreenMyChallengeText}>
            나의 챌린지
          </Text>
          <TouchableOpacity>
            <Text style={styles.homeContentsScreenMyChallengeViewMore}>
              더보기
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.homeContentsScreenMyChallengeMakeButton}>
          <Image
            source={require('src/assets/make-challenge.png')}
            style={styles.homeContentsScreenNewChallengeIcon}
          />
          <Text style={styles.homeContentsScreenNewChallengeText}>
            새로운 챌린지!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};