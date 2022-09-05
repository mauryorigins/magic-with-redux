/* eslint-disable require-jsdoc */
// ---CASES
import { Cases } from '@Redux/cardInfo/constants';
// ---TYPES
import { Dispatch } from 'redux';
import { UpdateArray, UpdateEmpty, UpdateTotal } from '@Redux/cardInfo/customTypes';

// -------------------------------------------ACTIONS------------------------------------
function updateCar(data: UpdateArray['payload']) {
  return (dispatch: Dispatch): void => {
    const action: UpdateArray = {
      type: Cases.ADD_TO_CAR,
      payload: data,
    };
    dispatch(action);
  };
}

function updateTotal(data: UpdateTotal['payload']) {
  return (dispatch: Dispatch): void => {
    const action: UpdateTotal = {
      type: Cases.UPDATE_TOTAL,
      payload: data,
    };
    dispatch(action);
  };
}

function cleanStates() {
  return (dispatch: Dispatch): void => {
    const action: UpdateEmpty = {
      type: Cases.RESET_CARD,
      payload: {},
    };
    dispatch(action);
  };
}

export const cardInfoActions = {
  updateCar,
  cleanStates,
  updateTotal,
};
