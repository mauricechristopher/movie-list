import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import './modules/styles/index.css';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  (
    // Provide our store to the application
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'));
serviceWorker.register();
