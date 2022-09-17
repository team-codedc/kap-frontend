import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useForm, Controller} from 'react-hook-form';
import {Button as CommonButton, TextArea} from 'src/components';
import {styles} from './styles';
import * as ImagePicker from 'react-native-image-picker';

type OpenChallengeStep3Values = {
  name: string;
  description: string;
  rule: string;
  certificationFrequency: any;
  certificationPerDay: string;
  certificableStartTime: string;
  certificableFinishTime: string;
  category: string[];
};

export const OpenChallengeStep3Screen: React.FC = () => {
  const {handleSubmit, control} = useForm<OpenChallengeStep3Values>();

  const onSubmit = (data: OpenChallengeStep3Values) => {
    console.log(data);
  };

  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.ChallengeNameContainer}>
              <TouchableOpacity
                onPress={() =>
                  ImagePicker.launchImageLibrary(
                    {
                      mediaType: 'photo',
                      includeBase64: false,
                      maxHeight: 200,
                      maxWidth: 200,
                    },
                    response => {
                      console.log(response);
                    },
                  )
                }
                style={styles.GalleryContainer}>
                <Image source={require('src/assets/gallery.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.ChallengeNameInput}
                onBlur={onBlur}
                onChangeText={v => onChange(v)}
                value={value}
                placeholder="챌린지명 (예: 한강 쓰레기 분리수거)"
              />
            </View>
          )}
          name="name"
          rules={{required: true}}
        />
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
        <CommonButton onPress={handleSubmit(onSubmit)} label="다음으로" />
      </View>
    </SafeAreaView>
  );
};
