import { configureStore } from '@reduxjs/toolkit';

import { api } from './slice/api.js';
import { usersApi } from './slice/usersApi.js';


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(api.middleware, usersApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
