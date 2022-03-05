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
  }

  return state;
};
