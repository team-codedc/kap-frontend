import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {AppLayout} from 'src/components';
import {SCREEN} from 'src/constant';
import {useMyChallenge} from 'src/hooks/query/useChallenge';
import {hp, wp} from 'src/utils';
import {styles} from './styles';

export const MyChallenge: React.FC = () => {
  const {data: challenge} = useMyChallenge();

  return (
    <AppLayout title="나의 챌린지" route={SCREEN.HOME}>
      <ScrollView style={{marginTop: hp(10)}}>
        {challenge?.map((v, i) => {
          return (
            <TouchableOpacity
              key={i + 1}
              style={styles.homeContentsScreenMyChallengeButton}>
              <Image
                source={require('src/assets/3d-fluency-idea.png')}
                style={{marginRight: wp(10)}}
              />
              <Text style={styles.homeContentsScreenMyChallenge}>{v.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </AppLayout>
  );
};
