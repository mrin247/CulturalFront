import axios from "../utils/axios";
import { orderConstants } from "./constants";

export const addOrder = (order) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: orderConstants.ADD_ORDER_REQUEST });
      res = await axios.post("/client/order/addorder", order);
      if (res.status === 201) {
        dispatch({
          type: orderConstants.ADD_ORDER_SUCCESS,
          payload: { order },
        });
      } else {
        const { error } = res.data;
        console.log(error);
        dispatch({
          type: orderConstants.ADD_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: orderConstants.ADD_ORDER_FAILURE,
        payload: { error },
      });
    }
  };
};
