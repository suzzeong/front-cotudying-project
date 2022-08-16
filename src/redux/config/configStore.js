import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../modules/boardSlice';
import userSlice from '../modules/userSlice';

export const store = configureStore({
  reducer: {
    cotudy: boardSlice,
    users: userSlice,
  },
});
