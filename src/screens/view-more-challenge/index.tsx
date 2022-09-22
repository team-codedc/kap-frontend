import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {AppLayout} from 'src/components';
import {SCREEN} from 'src/constant';

import {styles} from './styles';

export const ViewMoreChallengeScreen: React.FC = () => {
  return (
    <AppLayout
      route={SCREEN.HOME}
      direction="row"
      title="현재 참여중인 챌린지 :)">
      <ScrollView>
        <View style={styles.viewMoreChallengeScreenContentContainer}>
          {Array.from(Array(8).keys()).map((_, key) => {
            return (
              <TouchableOpacity
                key={key + 1}
                style={styles.viewMoreChallengeScreenContentWrapper}>
                <Image source={require('src/assets/challenge-image.png')} />
                <Text style={styles.viewMoreChallengeScreenContentDescription}>
                  한강 청소하기
                </Text>
                <Text style={styles.viewMoreChallengeScreenContentDateText}>
                  오늘 시작한 챌린지에요 :)
                </Text>
                <View style={styles.viewMoreChallengeScreenContentTagWrapper}>
                  <Text style={styles.viewMoreChallengeScreenContentTag}>
                    오늘부터
                  </Text>
                  <Text style={styles.viewMoreChallengeScreenContentTag}>
                    오늘부터
                  </Text>
                  <Text style={styles.viewMoreChallengeScreenContentTag}>
                    오늘부터
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </AppLayout>
  );
};
