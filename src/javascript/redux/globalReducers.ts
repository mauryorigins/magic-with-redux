// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Redux/appInfo/customTypes';
// ---Reducers
import { appInfoReducer } from '@Redux/appInfo/reducer';
// https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface FullReduxState {
  appInfoReducer: AppInfoState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
export const rootReducer = combineReducers({
  appInfoReducer,
});
