import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {AppLayout, Button} from 'src/components';
import {styles} from './styles';
import * as ImagePicker from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {wp} from 'src/utils';

type OpenChallengeStep4Values = {
  name: string;
  description: string;
  rule: string;
  certificationFrequency: any;
  certificationPerDay: string;
  certificableStartTime: string;
  certificableFinishTime: string;
  category: string[];
};

// // eslint-disable-next-line no-extend-native
// Date.prototype.format = function (f) {
//   if (!this.valueOf()) {
//     return ' ';
//   }

//   const weekName = [
//     '일요일',
//     '월요일',
//     '화요일',
//     '수요일',
//     '목요일',
//     '금요일',
//     '토요일',
//   ];
//   // eslint-disable-next-line consistent-this
//   const d = this;

//   return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
//     switch ($1) {
//       case 'yyyy':
//         return d.getFullYear();
//       case 'yy':
//         return (d.getFullYear() % 1000).zf(2);
//       case 'MM':
//         return (d.getMonth() + 1).zf(2);
//       case 'dd':
//         return d.getDate().zf(2);
//       case 'E':
//         return weekName[d.getDay()];
//       case 'HH':
//         return d.getHours().zf(2);
//       case 'hh':
//         return ((h = d.getHours() % 12) ? h : 12).zf(2);
//       case 'mm':
//         return d.getMinutes().zf(2);
//       case 'ss':
//         return d.getSeconds().zf(2);
//       case 'a/p':
//         return d.getHours() < 12 ? '오전' : '오후';
//       default:
//         return $1;
//     }
//   });
// };

// // eslint-disable-next-line no-extend-native
// String.prototype.string = function (len) {
//   var s = '',
//     i = 0;
//   while (i++ < len) {
//     s += this;
//   }
//   return s;
// };
// // eslint-disable-next-line no-extend-native
// String.prototype.zf = function (len) {
//   return '0'.string(len - this.length) + this;
// };
// // eslint-disable-next-line no-extend-native
// Number.prototype.zf = function (len) {
//   return this.toString().zf(len);
// };

export const OpenChallengeStep4Screen: React.FC = () => {
  const {handleSubmit, control} = useForm<OpenChallengeStep4Values>();

  const placeholder = '날짜를 입력해주세요';

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onSubmit = (data: OpenChallengeStep4Values) => {
    console.log(data);
  };

  const handleConfirm = (date: any) => {
    console.warn('dateFormat: ', date.format('yyyy/MM/dd'));
    hideDatePicker();
    onChangeText(date.format('yyyy/MM/dd'));
  };

  return (
    <AppLayout direction="row" title="챌린지 만들기">
      <View>
        <View style={styles.typeSelectWrapper}>
          <Controller
            control={control}
            render={({}) => (
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
                style={styles.galleryContainer}>
                <Text style={styles.galleryText}>좋은예</Text>
              </TouchableOpacity>
            )}
            name="name"
            rules={{required: true}}
          />
          <Controller
            control={control}
            render={({}) => (
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
                style={styles.galleryContainer}>
                <Text style={styles.galleryText}>나쁜예</Text>
              </TouchableOpacity>
            )}
            name="name"
            rules={{required: true}}
          />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={{marginRight: wp(10)}}
            onPress={showDatePicker}>
            <TextInput
              pointerEvents="none"
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor="#000000"
              underlineColorAndroid="transparent"
              editable={false}
              value={text}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              pointerEvents="none"
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor="#000000"
              underlineColorAndroid="transparent"
              editable={false}
              value={text}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerButton}>
          <Button onPress={handleSubmit(onSubmit)} label="생성하기" />
        </View>
      </View>
    </AppLayout>
  );
};
