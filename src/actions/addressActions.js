import axios from "../utils/axios";
import { addressConstants } from "./constants";

const getAddress = () => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: addressConstants.GET_ADDRESS_REQUEST });
      res = await axios.get(`/client/address/getaddress`);
      console.log("res", res);
      if (res.status === 200) {
        const { addresses } = res.data;
        if (addresses) {
          dispatch({
            type: addressConstants.GET_ADDRESS_SUCCESS,
            payload: { address: addresses },
          });
        }
      } else {
        const { error } = res.data;
        console.log(error);
        dispatch({
          type: addressConstants.GET_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: addressConstants.GET_ADDRESS_FAILURE,
        payload: { error },
      });
    }
  };
};

export const createAddress = (payload) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: addressConstants.ADD_ADDRESS_REQUEST });
      res = await axios.post("/client/address/create", { payload });
      console.log(res);
      if (res.status === 201) {
        dispatch({
          type: addressConstants.ADD_ADDRESS_SUCCESS,
          payload: { address: res.data.address },
        });
        
      } else {
        const { error } = res.data;
        dispatch({
          type: addressConstants.ADD_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      dispatch({
        type: addressConstants.ADD_ADDRESS_FAILURE,
        payload: { error },
      });
    }
  };
};

export { getAddress };
