import * as ActionTypes from "./actionTypes";

const INITIAL_STATE = {
  email: null,
  pw: null,
  name: null,
  phoneNumber: null,
  officeNumber: null,
  agency: null,
};

export const userInfos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.USER_EMAIL:
      return {
        ...state,
        email: state.data,
      };
      break;
    case ActionTypes.USER_PHONE:
      return {
        ...state,
        phoneNumber: state.data,
      };
    case ActionTypes.USER_PW:
      return {
        ...state,
        pw: state.data,
      };
    case ActionTypes.USER_NAME:
      return {
        ...state,
        name: state.data,
      };
    case ActionTypes.USER_OFFICE_NUMBER:
      return {
        ...state,
        officeNumber: state.data,
      };
    case ActionTypes.USER_AGENCY:
      return {
        ...state,
        agency: state.data,
      };
    default:
      return state;
  }
};
