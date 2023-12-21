import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { api } from './slice/api.js';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);
