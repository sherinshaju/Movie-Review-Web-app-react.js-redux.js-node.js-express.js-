import counterReducer from "./counter";
import view from "./view";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  view
});

export default allReducers;
