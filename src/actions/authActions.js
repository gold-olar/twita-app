import axios from "axios";
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  AUTH_LOADING,
  CLEAR_ERRORS,
} from "./actionTypes";
import { AsyncStorage } from "react-native";

export function beginApiCall() {
  return {
    type: AUTH_LOADING,
  };
}

export function authError(err) {
  return {
    type: AUTH_ERROR,
    payload: err,
  };
}

export function registerUserSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function loginUserSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
}

export function clearErrorsSuccess() {
  return {
    type: CLEAR_ERRORS,
  };
}

export function clearErrors() {
  return async function (dispatch) {
    await dispatch(clearErrorsSuccess());
  };
}

export function registerUser(data) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const register = await axios({
        method: "POST",
        url: "/users/register",
        data: {
          confirmPassword: data.password,
          ...data,
        },
      });
      console.log(register.data);
      return dispatch(registerUserSuccess());
    } catch (err) {
      const {
        response: {
          data: { message },
        },
      } = err;
      return dispatch(authError(message));
    }
  };
}

export function loginUser(data) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const login = await axios({
        method: "POST",
        url: "/users/login",
        data: {
          ...data,
        },
      });
      console.log(login.data);
      const {
        data: { token },
      } = login.data;
      await AsyncStorage.setItem("token", token);
      return dispatch(loginUserSuccess(token));
    } catch (err) {
      const {
        response: {
          data: { message },
        },
      } = err;
      return dispatch(authError(message));
    }
  };
}
