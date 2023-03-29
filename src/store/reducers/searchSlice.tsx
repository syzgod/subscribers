import { createSlice } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';

interface searchState {
  searchInput: string;
}

const initialState: searchState = {
  searchInput: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state: any, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;

export default searchSlice.reducer;
