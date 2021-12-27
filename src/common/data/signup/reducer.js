import * as ActionTypes from './actionTypes';

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
        email: action.data,
      };
    case ActionTypes.USER_PHONE:
      return {
        ...state,
        phoneNumber: action.data,
      };
    case ActionTypes.USER_PW:
      return {
        ...state,
        pw: action.data,
      };
    case ActionTypes.USER_NAME:
      return {
        ...state,
        name: action.data,
      };
    case ActionTypes.USER_OFFICE_NUMBER:
      return {
        ...state,
        officeNumber: action.data,
      };
    case ActionTypes.USER_AGENCY:
      return {
        ...state,
        agency: action.data,
      };
    case ActionTypes.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
