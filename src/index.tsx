import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./App";

import { Provider } from 'react-redux';

import configureStore from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
