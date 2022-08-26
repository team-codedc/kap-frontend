import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({label, style, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, style]}
      {...props}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};
