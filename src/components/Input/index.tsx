import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import {styles} from './styles';

export interface InputProps extends TextInputProps {
  label: string;
}

export const Input: React.FC<InputProps> = ({label, ...props}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
