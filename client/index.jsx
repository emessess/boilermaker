import React from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';


reactDOM.render(
  <Provider store={store}>
    <p>Hello World!</p>
  </Provider>,
  document.getElementById('app')
);
