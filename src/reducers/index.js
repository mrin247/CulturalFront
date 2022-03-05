import authReducer from "./authReducer";
import productReducer from "./productReducers";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";
import orderReducer from "./orderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  address: addressReducer,
  orders: orderReducer,
});

export default rootReducer;
