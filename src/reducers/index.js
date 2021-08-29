import loginReducer from "./login";
import loadingReducer from "./loading";
import fetchReducer from "./fetch";
import incrementReducer from "./increment";
import questionReducer from "./question";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  login: loginReducer,
  loading: loadingReducer,
  fetching: fetchReducer,
  increment: incrementReducer,
  question: questionReducer,
});

export default allReducers;
