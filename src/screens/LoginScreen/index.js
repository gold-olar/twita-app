import React, { useEffect } from "react";
import { loginUser, clearErrors, persistUser } from "../../actions/authActions";
import Login from "../../components/Login";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const LoginScreen = ({ navigation: { navigate }, auth, ...props }) => {
  useFocusEffect(
    React.useCallback(() => {
      props.persistUser();
      props.clearErrors();
    }, [])
  );

  useEffect(() => {
    auth.token && navigate("Dashboard");
  }, [auth]);

  const handleLogin = async (data) => {
    await props.loginUser(data);
  };
  return <Login auth={auth} submit={handleLogin} navigate={navigate} />;
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

const mapDispatchToProps = { loginUser, clearErrors, persistUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
