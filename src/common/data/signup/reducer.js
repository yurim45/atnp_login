import * as ActionTypes from "./actionTypes";

const INITIAL_STATE = {
  email: {
    value: "aaa@gmail.com",
    notice: ' "aaa@gmail.com"',
  }, // null,
  pw: "111111", // null,
  name: "사용자", // null,
  phoneNumber: "01022223333", // null,
  officeNumber: "07022223333", //null,
  agency: "한국과학기술연구원", //null,
};

export const userInfos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.USER_EMAIL:
      const check = String(action.data)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!action.data) {
        return {
          ...state,
          email: {
            value: action.data,
            notice: "이메일을 입력해주세요",
          },
        };
      }
      if (check == null) {
        return {
          ...state,
          email: {
            value: action.data,
            notice: "올바른 이메일 형식이 아닙니다",
          },
        };
      }
      return {
        ...state,
        email: {
          value: action.data,
          notice: "",
        },
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
