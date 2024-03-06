import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {styles} from './Style';
import Balance from '../../components/Balance';
import CustomButton from '../../components/CustomButton';
import {COLOR, ICON} from '../../utils/Constants';
import CurrencyItem from '../../components/CurrencyItem';
import {LineChart} from 'react-native-wagmi-charts';
import {useGetMarketCoinQuery} from '../../api/GeckoAPI';
import moment from 'moment';
import {Coin} from '../../api/DataType';

export default function Home() {
  const {data, isLoading, error} = useGetMarketCoinQuery();
  const startDateUnix = moment().subtract(7, 'day').unix();

  const chartData = data
    ? data[0].sparkline_in_7d.price.map((item, idx) => {
        return {timestamp: startDateUnix + idx * 3600, value: item};
      })
    : [{timestamp: 0, value: 0}];

  const renderCurrenciesItem = ({item}: {item: Coin}) => {
    const percentChange = item.price_change_percentage_24h
      ? item.price_change_percentage_24h.toFixed(2)
      : 0;
    return (
      <CurrencyItem
        name={item.name}
        image={{uri: item.image}}
        current_price={item.current_price}
        percentChange={percentChange}
      />
    );
  };

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
      <LineChart.Provider data={chartData}>
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
        data={data}
        renderItem={renderCurrenciesItem}
        ItemSeparatorComponent={() => <View style={{height: 35}} />}
        style={styles.cList}
      />
    </View>
  );
}
