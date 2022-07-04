/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { orderConstants } from "../actions/constants";

const initState = {
  orders: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    
    case orderConstants.GET_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderConstants.GET_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.orders,
        loading: false,
      };
      break;
    case orderConstants.GET_ORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;


    case orderConstants.ADD_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderConstants.ADD_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload.order,
        loading: false,
      };
      break;
    case orderConstants.ADD_ORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
