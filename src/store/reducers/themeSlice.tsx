import { createSlice } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
interface themeState {
  darkMode: boolean | null;
}

const initialState: themeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: any) => {
      state.darkMode = !state.darkMode;
      enqueueSnackbar(`Switched to ${state.darkMode ? 'Dark' : 'Light'} mode`, {
        variant: 'warning',
      });
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
