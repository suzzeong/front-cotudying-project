import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cotudy: [],
  isLoading: false,
  error: null,
};

// post
export const __postCotudy = createAsyncThunk(
  'POST_COTUDY',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post('http://localhost:3001/cotudy', payload);
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
      const data = await axios.get('http://localhost:3001/cotudy');
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
      const data = await axios.delete(
        `http://localhost:3001/cotudy/${payload}`,
        payload
      );
      // thunkAPI.dispatch(__getCotudy());
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
