import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';
import { setAuthorizationToken } from '../../AuthorizationToken';

export const __loginUser = createAsyncThunk(
  'LOGIN_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('http://3.34.185.48/api/login', payload);
      setCookie('ACCESS_TOKEN', data.data.mytoken);
      // setCookie('ACCESS_TOKEN', data.data.result.data.accessToken);
      // setCookie('REFRESH_TOKEN', data.data.result.data.refreshToken);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signupUser = createAsyncThunk(
  'SIGNUP_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('http://54.180.31.152/api/signup', payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: {
    userToken: '',
  },
  isLogin: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {
    // getUser: (state, action) => {
    //   action.payload {}
    // }
  },
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user.usertoKen = getCookie('ACCESS_TOKEN');
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.response.data;
    },
    [__signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [__signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
