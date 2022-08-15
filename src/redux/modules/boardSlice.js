import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cotudy: [],
  isLoading: false,
  error: null,
};

// post
export const _postCotudy = createAsyncThunk('POST_COTUDY', async (payload, thunkAPI) => {
  try {
    const data = await axios.post('http://54.180.92.90/api/board', payload)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// get
export const _getCotudy = createAsyncThunk('GET_COTUDY', async (payload, thunkAPI) => {
  try {
    const data = await axios.get('http://54.180.92.90/api/board', payload)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// delete - 로그인 시 실행
export const _deleteCotudy = createAsyncThunk('DELETE_COTUDY', async (payload, thunkAPI) => {
  try {
    const data = await axios.delete('http://54.180.92.90/api/login', payload)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const boardSlice = createSlice({
  name: 'cotudy',
  initialState,
  reducers: {},
  extraReducers: {
    // post
    [_postCotudy.pending]: (state) => {
      state.isLoading = true;
    },
    [_postCotudy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cotudy.push(action.payload);
    },
    [_postCotudy.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get
    [_getCotudy.pending]: (state) => {
      state.isLoading = true;
    },
    [_getCotudy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cotudy = action.payload;
    },
    [_getCotudy.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete - 로그인 시 실행
    [_deleteCotudy.pending]: (state) => {
      state.isLoading = true;
    },
    [_deleteCotudy.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cotudy = action.payload;
    },
    [_deleteCotudy.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  }
})

export const { } = boardSlice.actions;
export default boardSlice.reducer;