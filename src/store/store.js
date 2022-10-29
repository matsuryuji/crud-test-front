import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { userService } from './user/userService';

export const store = configureStore({
  reducer: {
    [userService.reducerPath]: userService.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userService.middleware),
});
