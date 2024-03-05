import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';

type Props = {
  icon: any;
  label: string;
};
export default function CustomButton({icon, label}: Props) {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={icon} style={styles.btnIcon} />
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
