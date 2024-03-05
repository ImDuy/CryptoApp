import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {COLOR} from '../utils/Constants';

type Props = {
  label: string;
  icon: any;
  focused?: boolean;
  isCircle?: boolean;
};

export default function TabIcon({
  label,
  icon,
  focused = true,
  isCircle = false,
}: Props) {
  return (
    <View style={[styles.tabIconContainer, isCircle && styles.circleTab]}>
      <Image
        source={icon}
        style={[styles.tabIcon, focused && styles.tabIconFocused]}
      />
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
        {label}
      </Text>
    </View>
  );
}
