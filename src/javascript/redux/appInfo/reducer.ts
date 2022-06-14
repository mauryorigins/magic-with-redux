/* eslint-disable require-jsdoc */
// -------------------------------------------TYPES------------------------------------
import { Cases } from '@Redux/appInfo/constants';
import { Action, ReducerState, Colors } from '@Redux/appInfo/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE: ReducerState = {
  isMovil: false,
  winSize: 'lg',
  isLoading: false,
  currentPath: '',
  currentParams: '',
  lessColors: getColors()!,
};

// ------------------------------------------REDUCER-----------------------------------
export function appInfoReducer(state = INITIAL_STATE, action: Action): ReducerState {
  const { type, payload } = action;
  switch (type) {
    case Cases.CHANGE_RESPONSIVE:
      return {
        ...state,
        isMovil: payload.isMovil,
        winSize: payload.winSize,
      };

    case Cases.UPDATE_PATH:
      return {
        ...state,
        currentPath: payload,
      };

    case Cases.UPDATE_PARAMS:
      return {
        ...state,
        currentParams: payload,
      };

    case Cases.UPDATE_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
}

// ---------------------------AUX METHODS

function getColors() {
  try {
    let colors: Colors = JSON.parse(process?.env?.REACT_APP_LESS_COLORS as string);
    colors = {
      ...colors,
      primary: colors?.['@colorSecondary'],
      secondary: colors?.['@colorSecondary'],
    };
    return colors;
  } catch (error) {
    return undefined;
  }
}
