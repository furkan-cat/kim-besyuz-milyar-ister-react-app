import loginReducer from "./login";
import loadingReducer from "./loading";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  login: loginReducer,
  loading: loadingReducer,
});

export default allReducers;
