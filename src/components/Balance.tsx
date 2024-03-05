import {View, Text, Image, ViewStyle} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {ICON} from '../utils/Constants';

type Props = {
  title: string;
  currency: string;
  percent: string;
  dayChange: string;
  style?: ViewStyle;
};

export default function Balance({
  title,
  currency,
  percent,
  dayChange,
  style,
}: Props) {
  return (
    <View style={style}>
      <Text style={styles.bSubtitle}>{title}</Text>
      <Text style={styles.bTitle}>
        ${'  '}
        <Text style={styles.bHighlightTitle}>{currency}</Text>USD
      </Text>
      <View style={styles.bSubContainer}>
        <Image source={ICON.UPWARD} style={styles.bHighlightIcon} />
        <Text style={styles.bHighlightText}>{percent}%</Text>
        <Text style={styles.bSmallText}>{dayChange}d change</Text>
      </View>
    </View>
  );
}
