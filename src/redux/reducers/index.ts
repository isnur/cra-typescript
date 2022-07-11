import { combineReducers } from "redux";
import commonReducer from "./common";

const reducers = combineReducers({
  common: commonReducer,
});

export default reducers;
