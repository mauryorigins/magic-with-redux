
// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import {ReducerState as AppInfoState} from '@Redux/appInfo/customTypes';
// ---Reducers
import appInfoReducer from '@Redux/appInfo/reducer';
// ----------------------------------------ALL REDUX STATE TYPE-----------------------------------
export interface ReduxState {
  appInfoReducer: AppInfoState;
}

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
const rootReducer = combineReducers({
  appInfoReducer
});

export default  rootReducer