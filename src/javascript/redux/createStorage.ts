import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// ---Reducers
import { FullReduxState, rootReducer } from '@Redux/globalReducers';
import { ignoreProperties } from 'Utils/functions/objectMethods';

/**
 * Método que recibe el estado completo de redux y lo convierte a json string para
 * persistirlo en el local storage, éste método se puede suscribir a los actions de redux
 * para que sea ejecutado en el dispatch de culaquier accion en redux
 * @param {FullReduxState} FullReduxState - state: Estado completo de redux
 * @returns {void} void
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
 * Carga un objeto con el estado inicial para redux desde el local storage si es que existe
 * @param {string[]} string[] - ignoredStorages: Array de nombres con propiedades que se ignoraran en el initial state
 * @returns {Object} Objeto inicial para redux
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
  } catch (_) {
    return {};
  }
}

/**
 * Determina el método "compose" de redux a utilizar dependiendo si existen "redux dev tools"
 * instaladas en el navegador o si la aplicacion está en modo productivo
 * @returns {compose} compose
 */
function getCompose() {
  if (process.env.NODE_ENV === 'development') {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  return compose;
}

const doNotRead = ['appInfoReducer'];
const composeMethod = getCompose();

const store = createStore(
  rootReducer,
  loadFromLocalStorage(doNotRead),
  composeMethod(applyMiddleware(reduxThunk)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

/** Objeto "redux storage" configurado para guardar y leer los datos en el localstorage del navegador */
export const reduxStorage = store;
