import React, { useEffect } from "react";
import { connect } from "react-redux";
import Register from "../../components/Register";
import { registerUser } from "../../actions/authActions";
import Modal from "../../components/OverLay";

const RegisterScreen = ({ navigation: { navigate }, auth, ...props }) => {
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

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
