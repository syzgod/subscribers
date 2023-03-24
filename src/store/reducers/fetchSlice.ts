import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  subscribers: [],
  status: 'idle',
  error: null,
};

const url = 'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber';

export const getSubscribers = createAsyncThunk(
  'subscribers/getSubscribers',
  async (thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const subscribersSlice = createSlice({
  name: 'subscribers',
  initialState,
  reducers: {},
  extraReducers: {
    [getSubscribers.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getSubscribers.fulfilled]: (state, action) => {
      state.status = 'successful';
    },
    [getSubscribers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default subscribersSlice.reducer;
