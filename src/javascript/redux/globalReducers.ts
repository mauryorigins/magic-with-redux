// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Redux/appInfo/customTypes';
import { ReducerState as CardInfoState } from '@Redux/cardInfo/customTypes';
// ---Reducers
import { appInfoReducer } from '@Redux/appInfo/reducer';
import { cardInfoReducer } from '@Redux/cardInfo/reducer';
// https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react

/**
 * Interfaz con el tipado completo del estado global de redux
 */
export interface FullReduxState {
  appInfoReducer: AppInfoState;
  cardInfoReducer: CardInfoState;
}

/**
 * Merge de todos los reducers
 */
export const rootReducer = combineReducers({
  appInfoReducer,
  cardInfoReducer,
});
