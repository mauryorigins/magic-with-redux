// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING,
} from '@Redux/appInfo/types';
import { Dispatch } from 'redux'
import { ResponsiveData } from '@Redux/appInfo/customTypes';

// -------------------------------------------ACTIONS------------------------------------
export const changeResponsiveFlag = (responsiveData: ResponsiveData) => (dispatch: Dispatch) : void => {
  dispatch({
    type: CHANGE_RESPONSIVE,
    payload: responsiveData
  });
};

export const updatePath = (newPath: string) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PATH,
    payload: newPath
  });
};

export const updateParams = (newParam: string) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PARAMS,
    payload: newParam
  });
};

export const updateLoading = (flag: boolean) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_LOADING,
    payload: flag
  });
};
