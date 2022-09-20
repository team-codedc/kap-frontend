import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {AppLayout, Button as CommonButton, TextArea} from 'src/components';
import {styles} from './styles';
import * as ImagePicker from 'react-native-image-picker';
import {SCREEN} from 'src/constant';
import {useNavigation} from 'src/hooks';
// import {API_SUFFIX, instance} from 'src/api';

type OpenChallengeStep3Values = {
  name: string;
  description: string;
  rule: string;
  file: {
    assets: [
      {
        fileName: string;
        fileSize: number;
        height: number;
        type: string;
        uri: string;
        width: number;
      },
    ];
  };
};

export const OpenChallengeStep3Screen: React.FC = () => {
  const {handleSubmit, control, watch} = useForm<OpenChallengeStep3Values>();

  const {file} = watch();
  const {navigate} = useNavigation();

  const onSubmit = async (request: OpenChallengeStep3Values) => {
    // const {data} = await instance.post(API_SUFFIX.CHALLENGE_CREATE, {
    //   ...request,
    //   category: 'etc',
    // });
    // console.log(data);
    console.log(request);
    return navigate(SCREEN.OPEN_CHALLENGE_STEP4);
  };

  return (
    <AppLayout
      route={SCREEN.OPEN_CHALLENGE_STEP1}
      direction="row"
      title="챌린지 만들기">
      <View style={styles.challengeNameContainer}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur}}) => (
            <TouchableOpacity
              onBlur={onBlur}
              onPress={() =>
                ImagePicker.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  response => {
                    onChange(response);
                  },
                )
              }
              style={styles.galleryContainer}>
              {file?.assets[0]?.uri === undefined ? (
                <Image source={require('src/assets/gallery.png')} />
              ) : (
                <Image
                  source={{uri: file?.assets[0]?.uri}}
                  style={styles.challengeProfileImage}
                />
              )}
            </TouchableOpacity>
          )}
          name="file"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.challengeNameInput}
              onBlur={onBlur}
              onChangeText={v => onChange(v)}
              value={value}
              placeholder="챌린지명 (예: 한강 쓰레기 분리수거)"
            />
          )}
          name="name"
          rules={{required: true}}
        />
      </View>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextArea
              onBlur={onBlur}
              onChangeText={v => onChange(v)}
              value={value}
              label="챌린지 설명"
              numberOfLines={5}
              placeholder="무슨 챌린지를 진행하는지 자세하게 입력해주세요! &#10;(30자 이상)"
            />
          )}
          name="description"
          rules={{required: true}}
        />
      </View>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextArea
              onBlur={onBlur}
              onChangeText={v => onChange(v)}
              value={value}
              label="인증 규칙"
              numberOfLines={5}
              placeholder="규칙을 입력해 보다 정확한 인증에 도전해봐요 :) &#10;(30자 이상)"
            />
          )}
          name="rule"
          rules={{required: true}}
        />
      </View>
      <View style={styles.footerButton}>
        <CommonButton onPress={handleSubmit(onSubmit)} label="다음으로" />
      </View>
    </AppLayout>
  );
};
