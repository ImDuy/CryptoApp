import {View, Text, Image} from 'react-native';
import React from 'react';
import {ICON} from '../utils/Constants';
import {styles} from './Style';

export default function CurrencyItem() {
  return (
    <View style={styles.ciContainer}>
      <View style={styles.ciSubContainerStart}>
        <Image source={ICON.WITHDRAW} style={styles.ciIcon} />
        <Text style={styles.ciName}>Bitcoin</Text>
      </View>

      <View>
        <Text style={styles.ciPrice}>$ 31.233,22</Text>
        <View style={styles.ciPercentContainer}>
          <Image source={ICON.UPWARD} style={styles.ciPercentIcon} />
          <Text style={styles.ciPercentText}>2.30%</Text>
        </View>
      </View>
    </View>
  );
}
