import React from 'react';
import {
  Text,
  TextInput as RNTextArea,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import {styles} from './styles';

export interface TextAreaProps extends RNTextInputProps {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({label, ...props}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View>
        <RNTextArea multiline={true} style={styles.inputArea} {...props} />
      </View>
    </View>
  );
};
