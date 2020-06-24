import axios from "axios";
import { REGISTER_SUCCESS, AUTH_ERROR, AUTH_LOADING } from "./actionTypes";

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

export function loginUser(data) {
  return function (dispatch) {
    //   dispatch(beginApiCall());
    // console.log(data);
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
