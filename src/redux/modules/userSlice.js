import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  cotudy:[],
  isLoading: false,
  error: null,
};

export const _postUserInfo = createAsyncThunk('user/postUserInfo', async(payload, thunkAPI) => {
  try {
    const data = await axios.post('http://54.180.92.90/api/login', payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch(error) {
    return thunkAPI.rejectWithValue(error);
  }
})
export const _getUserInfo = createAsyncThunk('user/getUserInfo', async(payload, thunkAPI) => {
  try {
    const data = await axios.get('http://54.180.92.90/api/login', payload);
    return thunkAPI.fulfillWithValue(data.data);
  } catch(error) {
    return thunkAPI.rejectWithValue(error);
  }
})


export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {},
  extraReducers: {
    [_postUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [_postUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [_postUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [_getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [_getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [_getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export const {} = userSlice.actions;
export default userSlice.reducer;