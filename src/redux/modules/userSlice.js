import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';

const initialState = {
  list: [],
  login: false,
  isLoading: false,
  error: null,
};

// export const _getUser = createAsyncThunk('GET_USER', async(payload, thunkAPI) => {
//   try {
//     const data = await axios.get('http://54.180.92.90/api/login', payload);
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch(error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// })

export const __loginUser = createAsyncThunk(
  'LOGIN_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('http://52.79.242.188/api/login', payload);
      setCookie('ACCESS_TOKEN', data.data.result.data.accessToken);
      setCookie('REFRESH_TOKEN', data.data.result.data.refreshToken);
      // console.log(data.data.result.data.accessToken);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {},
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [_getUserInfo.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [_getUserInfo.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
    // [_getUserInfo.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // }
  },
});

export default userSlice.reducer;
