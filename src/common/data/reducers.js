import { combineReducers } from "redux";
import { userInfos } from "./signup/reducer";

const AppReducer = combineReducers({
  userInfos,
});

export default AppReducer;
