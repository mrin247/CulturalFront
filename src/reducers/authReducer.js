/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export default (state = initState, action) => {
  console.log(action.type);

  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        authenticate: false,
        authenticating: false,
      };
      break;

    case authConstants.FORGOT_REQUEST:
      state = {
        ...state,
      };
      break;
    case authConstants.FORGOT_SUCCESS:
      state = {
        ...state,
        message: "Email sent successfully",
      };
      break;
    case authConstants.FORGOT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    case authConstants.RESET_REQUEST:
      state = {
        ...state,
      };
      break;
    case authConstants.RESET_SUCCESS:
      state = {
        ...state,
        message: "Password Reset Successfully",
      };
      break;
    case authConstants.RESET_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        authenticate: false,
        authenticating: false,
      };
      break;

    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }

  return state;
};