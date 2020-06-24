import React from "react";
import Login from "../../components/Login";

const LoginScreen = ({ navigation: { navigate } }) => {
  return <Login navigate={navigate} />;
};

export default LoginScreen;
