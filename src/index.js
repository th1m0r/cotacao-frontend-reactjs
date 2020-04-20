import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux'

import Login from './pages/Login';
import App from './App';

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);