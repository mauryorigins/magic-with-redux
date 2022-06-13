// --- Styles
import '../css/index.less';
import React from 'react';
import { createRoot, } from 'react-dom/client';
// --- Main container
import AppContainer from './AppContainer';

// --- Redux configuration
import { Provider, } from 'react-redux';
import { createStore, applyMiddleware, compose, } from 'redux';
import reduxThunk from 'redux-thunk';
// ---Reducers
import globalReducersState from '@Redux/globalReducers';
// Redux dev tools configuration
let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}
// Redux create global storage
const reduxStorage = createStore(
  globalReducersState,
  {},
  composeEnhancers(applyMiddleware(reduxThunk,),),
);

// --------------------------------- React integration ---------------------------------
const rootHtmlElement = document.getElementById('root',);
const root = createRoot(rootHtmlElement!,);
root.render(
  <Provider store={reduxStorage}>
    <AppContainer />
  </Provider>,
);
