import authReducer from "./authReducer";
import productReducer from "./productReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
