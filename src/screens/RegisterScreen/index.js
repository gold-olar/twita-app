import React, { useEffect } from "react";
import { connect } from "react-redux";
import Register from "../../components/Register";
import { registerUser, clearErrors } from "../../actions/authActions";
import Modal from "../../components/OverLay";

import { useFocusEffect } from "@react-navigation/native";

const RegisterScreen = ({ navigation: { navigate }, auth, ...props }) => {
  useFocusEffect(
    React.useCallback(() => {
      props.clearErrors();
    }, [])
  );

  useEffect(() => {
    auth.register && navigate("Login");
  }, [auth]);

  const handleRegister = async (data) => {
    await props.registerUser(data);
  };

  return <Register auth={auth} submit={handleRegister} navigate={navigate} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

const mapDispatchToProps = { registerUser, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
