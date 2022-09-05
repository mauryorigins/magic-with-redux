/* eslint-disable require-jsdoc */
// -------------------------------------------TYPES------------------------------------
import { Cases } from '@Redux/cardInfo/constants';
import { Action, ReducerState } from '@Redux/cardInfo/customTypes';
import { infoMagicCards } from 'Others/DataCards';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE: ReducerState = {
  storageArray: infoMagicCards,
  ShoppingList: [],
  total: 0,
};

// ------------------------------------------REDUCER-----------------------------------
export function cardInfoReducer(state = INITIAL_STATE, action: Action): ReducerState {
  const { type, payload } = action;
  switch (type) {
    case Cases.ADD_TO_CAR:
      return {
        ...state,
        ShoppingList: [...state.ShoppingList, payload[payload.length - 1]],
        total: state.total + payload[payload.length - 1].price,
      };
    case Cases.UPDATE_TOTAL:
      return {
        ...state,
        total: payload,
      };
    case Cases.RESET_CARD:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}
