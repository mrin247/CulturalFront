import { productConstants } from "./constants";
import axios from "../utils/axios";

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
