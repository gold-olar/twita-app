import {
  AUTH_ERROR,
  AUTH_LOADING,
  REGISTER_SUCCESS,
} from "../actions/actionTypes";

export default function authReducer(state = {}, action) {
  console.log("E reach here");
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload, loading: false };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, register: "success" };
    default:
      return state;
  }
}
