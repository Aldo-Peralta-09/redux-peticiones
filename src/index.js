import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectDemo from './App';
import Store from './redux/store/Store';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectDemo/>
  </Provider>
  , document.getElementById('root')
);
