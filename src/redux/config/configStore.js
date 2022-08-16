import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { boardSlice } from '../modules/boardSlice';
import { userSlice } from '../modules/userSlice';

export const store = configureStore({
  reducer: {
    cotudy: boardSlice,
    users: userSlice,
  },
});
=======
import cotudy from '../modules/boardSlice'
import user from '../modules/userSlice'

export const store = configureStore({
  reducer: {
    cotudy,
    user
  }
})
>>>>>>> 974569b5d8501bcc7ea486851cdae7e0d9d09b13
