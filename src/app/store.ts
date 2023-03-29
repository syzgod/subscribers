import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { themeSlice } from './../store/reducers/themeSlice';
import { searchSlice } from '../store/reducers/searchSlice';
import { subscribers } from './../components/services/subscribers';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    search: searchSlice.reducer,
    [subscribers.reducerPath]: subscribers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subscribers.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);
