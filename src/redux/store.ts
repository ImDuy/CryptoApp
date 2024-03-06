import {configureStore} from '@reduxjs/toolkit';
import {GeckoAPI} from '../api/GeckoAPI';

export const store = configureStore({
  reducer: {
    [GeckoAPI.reducerPath]: GeckoAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(GeckoAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
