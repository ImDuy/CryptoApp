import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Coin} from './DataType';

export const GeckoAPI = createApi({
  reducerPath: 'GeckoAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/',
  }),
  endpoints: builder => ({
    getMarketCoin: builder.query<Coin[], void>({
      query: () =>
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d`,
    }),
  }),
});

export const {useGetMarketCoinQuery} = GeckoAPI;
