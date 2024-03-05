import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {COLOR} from '../utils/Constants';

type Props = {
  label: string;
  icon: any;
  focused: boolean;
};

export default function TabIcon({label, icon, focused}: Props) {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        style={[styles.tabIcon, focused && {tintColor: COLOR.white}]}
      />
      <Text style={[styles.tabLabel, focused && {color: COLOR.white}]}>
        {label}
      </Text>
    </View>
  );
}
