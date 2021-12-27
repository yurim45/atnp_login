import * as ActionTypes from './actionTypes';

export const getEmail = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_EMAIL, data: target.value });
  };
};

export const getPhone = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_PHONE, data: target.value });
  };
};

export const getPw = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_PW, data: target.value });
  };
};

export const getName = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_NAME, data: target.value });
  };
};

export const getOfficeNumber = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_OFFICE_NUMBER, data: target.value });
  };
};

export const getAgency = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_AGENCY, data: target });
  };
};

export const clear = (target) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.CLEAR });
  };
};
