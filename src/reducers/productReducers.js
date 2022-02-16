/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { productConstants } from "../actions/constants";

const initState = {
  product: null,
  products: [],
  loading: false,
  error: null,
  message: "",
};

export default (state = initState, action) => {
  console.log(action.type);

  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
        product: null,
      };
      break;
    case productConstants.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload.products,
        product: null,
      };
      break;
    case productConstants.GET_PRODUCTS_BY_CATEGORY_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        product: null,
      };
      break;

    case productConstants.GET_PRODUCTS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCTS_BY_ID_SUCCESS:
      state = {
        ...state,
        product: action.payload.product,
        loading: false,
      };
      break;
    case productConstants.GET_PRODUCTS_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    // case productConstants.RESET_REQUEST:
    //   state = {
    //     ...state,
    //   };
    //   break;
    // case productConstants.RESET_SUCCESS:
    //   state = {
    //     ...state,
    //     message: "Password Reset Successfully",
    //   };
    //   break;
    // case productConstants.RESET_FAILURE:
    //   state = {
    //     ...state,
    //     error: action.payload.error,
    //   };
    //   break;

    // case productConstants.LOGIN_REQUEST:
    //   state = {
    //     ...state,
    //     authenticating: true,
    //   };
    //   break;
    // case productConstants.LOGIN_SUCCESS:
    //   state = {
    //     ...state,
    //     user: action.payload.user,
    //     token: action.payload.token,
    //     authenticate: true,
    //     authenticating: false,
    //   };
    //   break;
    // case productConstants.LOGIN_FAILURE:
    //   state = {
    //     ...state,
    //     error: action.payload.error,
    //     authenticate: false,
    //     authenticating: false,
    //   };
    //   break;

    // case productConstants.LOGOUT_REQUEST:
    //   state = {
    //     ...state,
    //     loading: true,
    //   };
    //   break;
    // case productConstants.LOGOUT_SUCCESS:
    //   state = {
    //     ...initState,
    //   };
    //   break;
    // case productConstants.LOGOUT_FAILURE:
    //   state = {
    //     ...state,
    //     error: action.payload.error,
    //     loading: false,
    //   };
    //   break;
  }

  return state;
};
