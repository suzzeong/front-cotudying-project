import { configureStore } from '@reduxjs/toolkit';
import cotudy from '../modules/boardSlice'
import user from '../modules/userSlice'

export const store = configureStore({
  reducer: {
    cotudy,
    user
  }
})
