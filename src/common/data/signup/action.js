import * as ActionTypes from "./actionTypes";

export const getEmail = (target) => {
  console.log(target.value);
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_EMAIL, data: target.value });
  };
};

export const getPhone = (target) => {
  console.log(target.value);
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_PHONE, data: target.value });
  };
};

export const getPw = (target) => {
  console.log(target.value);
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_PW, data: target.value });
  };
};

export const getName = (target) => {
  console.log(target.value);
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_NAME, data: target.value });
  };
};

export const getOfficeNumber = (target) => {
  console.log(target.value);
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_OFFICE_NUMBER, data: target.value });
  };
};

export const getAgency = (target) => {
  console.log(target.value);
  return (dispatch) => {
    dispatch({ type: ActionTypes.USER_AGENCY, data: target.value });
  };
};
