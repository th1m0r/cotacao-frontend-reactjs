import './layout/dependencies';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import AuthOrApp from './authOrApp';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <AuthOrApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);