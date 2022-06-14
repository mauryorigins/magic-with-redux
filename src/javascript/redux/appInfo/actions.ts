/* eslint-disable require-jsdoc */
// ---CASES
import { Cases } from '@Redux/appInfo/constants';
// ---TYPES
import { Dispatch } from 'redux';
import { UpdateResponsive, UpdateString, UpdateBool } from '@Redux/appInfo/customTypes';

// -------------------------------------------ACTIONS------------------------------------
export function reduxUpdateResponsive(data: UpdateResponsive['payload']) {
  return (dispatch: Dispatch): void => {
    const action: UpdateResponsive = {
      type: Cases.CHANGE_RESPONSIVE,
      payload: data,
    };
    dispatch(action);
  };
}

export function reduxUpdatePath(data: UpdateString['payload']) {
  return (dispatch: Dispatch): void => {
    const action: UpdateString = {
      type: Cases.UPDATE_PATH,
      payload: data,
    };
    dispatch(action);
  };
}

export function reduxUpdateParam(data: UpdateString['payload']) {
  return (dispatch: Dispatch): void => {
    const action: UpdateString = {
      type: Cases.UPDATE_PARAMS,
      payload: data,
    };
    dispatch(action);
  };
}

export function reduxUpdateLoading(data: UpdateBool['payload']) {
  return (dispatch: Dispatch): void => {
    const action: UpdateBool = {
      type: Cases.UPDATE_LOADING,
      payload: data,
    };
    dispatch(action);
  };
}
