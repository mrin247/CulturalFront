import { productConstants } from "./constants";
import axios from "../utils/axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      res = await axios.get("/client/allproduct");
      if (res.status === 200) {
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products: res.data.products },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_FAILURE,
        payload: { error },
      });
    }
  };
};

export const getProductsByCategory = (category) => {
  console.log(category);
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: productConstants.GET_PRODUCTS_BY_CATEGORY_REQUEST });
      res = await axios.get("/client/product", { params: { c: category } });
      if (res.status === 200) {
        dispatch({
          type: productConstants.GET_PRODUCTS_BY_CATEGORY_SUCCESS,
          payload: { products: res.data.products },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCTS_BY_CATEGORY_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_CATEGORY_FAILURE,
        payload: { error },
      });
    }
  };
};

export const productDetail = (productId) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: productConstants.GET_PRODUCTS_BY_ID_REQUEST });
      res = await axios.get(`/client/product/${productId}`);
      if (res.status === 200) {
        dispatch({
          type: productConstants.GET_PRODUCTS_BY_ID_SUCCESS,
          payload: { product: res.data.product },
        });
      } else {
        console.log(res);
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCTS_BY_ID_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_ID_FAILURE,
        payload: { error },
      });
    }
  };
};
