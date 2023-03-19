import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { themeSlice } from './../store/reducers/themeSlice';
import { subscribersApi } from './../components/services/subscribers';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    [subscribersApi.reducerPath]: subscribersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subscribersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
