// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING
} from '@Redux/appInfo/types';
import { Action, ReducerState, ResponsiveData } from '@Redux/appInfo/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE: ReducerState  = {
  isMovil: false,
  winSize: 'lg',
  isLoading: false,
  currentPath: '',
  currentParams: ''
};

// ------------------------------------------REDUCER-----------------------------------
export default (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_RESPONSIVE:
      return {
        ...state,
        isMovil: (payload as ResponsiveData).isMovil,
        winSize: (payload as ResponsiveData).winSize
      };

    case UPDATE_PATH:
      return {
        ...state,
        currentPath: <string>payload
      };

    case UPDATE_PARAMS:
      return {
        ...state,
        currentParams: <string>payload
      };

    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: <boolean>payload
      };

    default:
      return state;
  }
};
