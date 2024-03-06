import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {ICON} from '../utils/Constants';
import {styles} from './Style';

type Props = {
  name: string;
  image: ImageSourcePropType;
  current_price: number;
  percentChange: string | number;
};

export default function CurrencyItem({
  name,
  image,
  current_price,
  percentChange,
}: Props) {
  const percentChangeNum = Number(percentChange);

  return (
    <View style={styles.ciContainer}>
      <View style={styles.ciSubContainerStart}>
        <Image source={image} style={styles.ciIcon} />
        <Text style={styles.ciName}>{name}</Text>
      </View>

      <View>
        <Text style={styles.ciPrice}>$ {current_price}</Text>
        <View style={styles.ciPercentContainer}>
          <Image
            source={ICON.UPWARD}
            style={[
              styles.ciPercentIcon,
              percentChangeNum < 0 && styles.ciPercentNegativeIcon,
            ]}
          />
          <Text
            style={[
              styles.ciPercentText,
              percentChangeNum < 0 && styles.ciPercentNegativeText,
            ]}>
            {percentChange}%
          </Text>
        </View>
      </View>
    </View>
  );
}
