import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';

// const BASE_URL = 'http://15.164.162.55';
const BASE_URL = 'http://localhost:3001';

const config = {
  headers: {
    Authorization: `Bearer ${getCookie('ACCESS_TOKEN')}`,
  },
};

// ==========================================================
// post
export const __postCotudy = createAsyncThunk(
  'POST_COTUDY',
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.post(
      //   `${BASE_URL}/api/board/write`,
      //   payload,
      //   config
      // );
      const data = await axios.post(`${BASE_URL}/cotudy`, payload, config);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// get
export const __getCotudy = createAsyncThunk(
  'GET_COTUDY',
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.get(`${BASE_URL}/api/board`, config);
      const data = await axios.get(`${BASE_URL}/cotudy`, config);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// get detail
export const __getDetail = createAsyncThunk(
  'GET_DETAIL',
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.get(`${BASE_URL}/api/board/${payload}`, config);
      const data = await axios.get(`${BASE_URL}/cotudy/${payload}`, config);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// delete - 로그인 시 실행
export const __deleteCotudy = createAsyncThunk(
  'DELETE_COTUDY',
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.delete(
      //   `${BASE_URL}/api/board/${payload}`,
      //   payload,
      //   config
      // );
      const data = await axios.delete(
        `${BASE_URL}/cotudy/${payload}`,
        payload,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// patch 참여하기

// ==========================================================

const initialState = {
  cotudy: [],
  detail: {},
  isLoading: false,
  error: null,
};

export const boardSlice = createSlice({
  name: 'cotudy',
  initialState,
  reducers: {},
  extraReducers: {
    // post
    [__postCotudy.pending]: (state) => {
      state.isLoading = true;
    },
    [__postCotudy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cotudy.push(action.payload);
    },
    [__postCotudy.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get
    [__getCotudy.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCotudy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cotudy = action.payload;
    },
    [__getCotudy.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get detail
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete - 로그인 시 실행
    [__deleteCotudy.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteCotudy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cotudy = action.payload;
    },
    [__deleteCotudy.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = boardSlice.actions;
export default boardSlice.reducer;
