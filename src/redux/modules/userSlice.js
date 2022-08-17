import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';

const BASE_URL = 'http://15.164.162.55';

const config = {
  headers: {
    Authorization: `Bearer ${getCookie('ACCESS_TOKEN')}`,
  },
};

export const __idCheck = createAsyncThunk(
  'ID_CHECK',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${BASE_URL}/api/idCheck`, payload);
      return thunkAPI.fulfillWithValue(data.data.result.msg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __loginUser = createAsyncThunk(
  'LOGIN_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${BASE_URL}/api/login`, payload);
      setCookie('ACCESS_TOKEN', data.data.result.data.accessToken);
      return thunkAPI.fulfillWithValue(data.data.result.data.accessToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signupUser = createAsyncThunk(
  'SIGNUP_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${BASE_URL}/api/signup`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getUser = createAsyncThunk(
  'GET_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${BASE_URL}/api/user`, config);
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
  name: 'users',
  initialState,
  reducers: {},
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
    [__idCheck.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.user.usertoKen = getCookie('ACCESS_TOKEN');
    },
    [__idCheck.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.response.data;
    },
    [__signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
