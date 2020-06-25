import {
  AUTH_ERROR,
  AUTH_LOADING,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT_USER,
} from "../actions/actionTypes";

export default function authReducer(state = {}, action) {
  console.log(state, "current State");
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case CLEAR_ERRORS:
      return { ...state, error: false };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload, loading: false };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, register: "success" };
    case LOGOUT_USER:
      console.log("Loggin Out");
      return {};
    default:
      return state;
  }
}
