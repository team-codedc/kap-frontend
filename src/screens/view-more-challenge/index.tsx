import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {AppLayout} from 'src/components';
import {SCREEN} from 'src/constant';
import {useChallenge} from 'src/hooks/query/useChallenge';
import {hp} from 'src/utils';

import {styles} from './styles';

export const ViewMoreChallengeScreen: React.FC = () => {
  const {data: joinChallenge} = useChallenge();

  return (
    <AppLayout title="참여 중인 챌린지" route={SCREEN.HOME}>
      <ScrollView style={{marginTop: hp(30)}}>
        <View style={styles.viewMoreChallengeScreenContentContainer}>
          {joinChallenge?.map((v, key) => {
            return (
              <TouchableOpacity
                key={key + 1}
                style={styles.viewMoreChallengeScreenContentWrapper}>
                <Image
                  style={styles.imageStyle}
                  source={require('src/assets/challenge-image.png')}
                />
                <Text style={styles.viewMoreChallengeScreenContentDescription}>
                  {v.name}
                </Text>
                <Text style={styles.viewMoreChallengeScreenContentDateText}>
                  {v.description}
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
