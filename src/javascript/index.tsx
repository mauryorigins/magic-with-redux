/* eslint-disable import/order */
// --- Styles
// import '../css/index.css';
import '../css/index.less';
import React from 'react';
import { render } from 'react-dom';
// --- Main container
import AppContainer from './AppContainer';

// --- Redux configuration
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// ---Reducers
import globalReducersState from '@Redux/globalReducers';
// Redux dev tools configuration
let composeEnhancers = null
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}
// Redux create global storage 
const reduxStorage = createStore(
  globalReducersState,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

// --------------------------------- React integration ---------------------------------
const rootElement = document.getElementById('root');

render(
  <Provider store={reduxStorage}>
    <AppContainer />
  </Provider>,
  rootElement
);
