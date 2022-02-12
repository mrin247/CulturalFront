import { authConstants } from "./constants";
import axios from "../utils/axios";

export const signup = (user) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      res = await axios.post(`/client/auth/signup`, user);
      if (res.status === 201) {
        dispatch({ type: authConstants.SIGNUP_SUCCESS });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        const { error } = res.data;
        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
      }
    } catch (error) {
      console.log(error);
      const { data } = error.response;
      dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: { error: data.error },
      });
    }
  };
};

export const signin = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/client/auth/signin`, {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      console.log("mrin");

      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const forgotPassword = (account) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: authConstants.FORGOT_REQUEST });
      res = await axios.post("/client/auth/forgot-password", account);

      if (res.status === 200) {
        dispatch({ type: authConstants.FORGOT_SUCCESS });
      } else {
        console.log("res", res);
        const { error } = res.data;
        dispatch({ type: authConstants.FORGOT_FAILURE, payload: { error } });
      }
    } catch (error) {
      console.log(error);
      const { data } = error.response;
      dispatch({
        type: authConstants.FORGOT_FAILURE,
        payload: { error: data.error },
      });
    }
  };
};

export const resetPassword = (credentials) => {
  return async (dispatch) => {
    let res;
    const token = credentials.token;
    try {
      dispatch({ type: authConstants.RESET_REQUEST });
      res = await axios.put(`/client/auth/reset-password/${token}`,credentials);
      if (res.status === 200) {
        dispatch({ type: authConstants.RESET_SUCCESS });
      } else {
        const { error } = res.data;
        dispatch({ type: authConstants.RESET_FAILURE, payload: { error } });

      }
    } catch (error) {
      console.log(error);
      dispatch({ type: authConstants.RESET_FAILURE, payload: { error } });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/client/auth/signout`);

    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};