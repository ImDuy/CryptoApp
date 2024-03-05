import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {styles} from './Style';
import Balance from '../../components/Balance';
import CustomButton from '../../components/CustomButton';
import {COLOR, ICON} from '../../utils/Constants';
import CurrencyItem from '../../components/CurrencyItem';
import {LineChart} from 'react-native-wagmi-charts';

export default function Home() {
  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 33545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  const currencies = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <SafeAreaView>
          <Balance
            title="Your Wallet"
            currency="45.500,34"
            percent="2.30"
            dayChange="7"
          />
        </SafeAreaView>
        <View style={[styles.btnsContainer, styles.mgTop16]}>
          <View style={styles.btnContainer}>
            <CustomButton icon={ICON.TRANSFER} label="Transfer" />
          </View>
          <View style={styles.btnContainer}>
            <CustomButton icon={ICON.WITHDRAW} label="Withdraw" />
          </View>
        </View>
      </View>

      {/* LineChart */}
      <LineChart.Provider data={data}>
        <LineChart style={styles.mgTop40} height={200}>
          <LineChart.Path width={1} color={COLOR.highlightText} />
          <LineChart.CursorCrosshair color={COLOR.highlightText}>
            <LineChart.Tooltip textStyle={styles.lineText} />
          </LineChart.CursorCrosshair>
        </LineChart>
      </LineChart.Provider>

      {/* Currencies */}
      <Text style={styles.cTitle}>Top CryptoCurrency</Text>
      <FlatList
        data={currencies}
        renderItem={({item}) => <CurrencyItem />}
        ItemSeparatorComponent={() => <View style={{height: 35}} />}
        style={styles.cList}
      />
    </View>
  );
}
