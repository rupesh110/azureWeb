import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import for createRoot


import './index.css';
import App from './App.js';

import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';

import store from './store.js';

setupListeners(store.dispatch);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
