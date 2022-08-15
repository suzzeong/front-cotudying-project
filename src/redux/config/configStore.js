import { configureStore } from '@reduxjs/toolkit';
import cotudy from '../modules/cotudySlice'

export const store = configureStore({
  reducer: {
    cotudy
  }
})
