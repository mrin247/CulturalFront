/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { addressConstants } from "../actions/constants";

const initState = {
  address: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case addressConstants.GET_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case addressConstants.GET_ADDRESS_SUCCESS:
      state = {
        ...state,
        address: action.payload.address,
        loading: false,
      };
      break;
    case addressConstants.GET_ADDRESS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
