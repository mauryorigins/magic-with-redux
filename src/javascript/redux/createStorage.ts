import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// ---Reducers
import { FullReduxState, rootReducer } from '@Redux/globalReducers';

/**
 * Convert object to string and store in localStorage
 * @returns
 */
function saveToLocalStorage(state: FullReduxState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Load string from localStarage and convert into an Object
 * invalid output must be undefined
 * @returns
 */
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// Redux dev tools configuration
let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeEnhancers(applyMiddleware(reduxThunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

/** Objeto "redux storage" configurado con para guardar los datos en el localstorage del navegador */
export const reduxStorage = store;
