import { configureStore } from '@reduxjs/toolkit';

import { api } from './slice/api.js';
import { usersApi } from './slice/usersApi.js';
import { cricketApi } from './slice/cricketApi.js';


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cricketApi.reducerPath]: cricketApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(api.middleware, usersApi.middleware, cricketApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
