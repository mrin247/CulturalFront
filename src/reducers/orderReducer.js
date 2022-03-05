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
    // case addressConstants.GET_ADDRESS_REQUEST:
    //   state = {
    //     ...state,
    //     loading: true,
    //   };
    //   break;
    // case addressConstants.GET_ADDRESS_SUCCESS:
    //   state = {
    //     ...state,
    //     address: action.payload.address,
    //     loading: false,
    //   };
    //   break;
    // case addressConstants.GET_ADDRESS_FAILURE:
    //   state = {
    //     ...state,
    //     loading: false,
    //     error: action.payload.error,
    //   };
    //   break;

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
