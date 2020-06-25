export function fetchTwits(data) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const token = await AsyncStorage.getItem("token");
      const login = await axios({
        method: "GET",
        url: "/tweets",
        data: {
          ...data,
        },
        headers: `Bearer ${token}`,
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
