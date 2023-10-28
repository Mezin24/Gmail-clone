import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { mailReducer } from './user/userSlice';

export const store = configureStore<StateSchema>({
  reducer: {
    mail: mailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
