import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// ---Reducers
import { FullReduxState, rootReducer } from '@Redux/globalReducers';
import { ignoreProperties } from 'Utils/functions/objectMethods';

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
 * Carga un string del localStarage y lo convierte a un Object
 * la salida inválida debe ser indefinida
 * @returns
 */
function loadFromLocalStorage(ignoredStorages: string[]) {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) {
      return {};
    }
    const reduxFromLocalStorage = JSON.parse(serialisedState);
    const finalStorage = ignoreProperties(reduxFromLocalStorage, ignoredStorages);
    return finalStorage;
  } catch (e) {
    console.warn(e);
    return {};
  }
}

// Redux dev tools configuration
let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const doNotRead = ['appInfoReducer'];

const store = createStore(
  rootReducer,
  loadFromLocalStorage(doNotRead),
  composeEnhancers(applyMiddleware(reduxThunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

/** Objeto "redux storage" configurado con para guardar los datos en el localstorage del navegador */
export const reduxStorage = store;
