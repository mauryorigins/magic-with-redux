// ---TYPES
import { Cases } from '@Redux/cardInfo/constants';
import { Card } from 'Others/types';

// ---------------CASES ACTIONS-----------------
export interface UpdateArray {
  type: Cases.ADD_TO_CAR;
  payload: Card[];
}
export interface UpdateEmpty {
  type: Cases.RESET_CARD;
  payload: {};
}

export interface UpdateTotal {
  type: Cases.UPDATE_TOTAL;
  payload: number;
}

// ----------------- ACTION -----------------
export type Action = UpdateArray | UpdateEmpty | UpdateTotal;
// ----------------- REDUCER -----------------
export interface ReducerState {
  storageArray: Card[];
  ShoppingList: Card[];
  total: number;
}
