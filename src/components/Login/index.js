import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import logo from "../../../assets/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";

const Login = ({ navigate, submit, auth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});
  const { error, loading } = auth;

  const handleSubmit = () => submit(data);
  const handleChange = (value, name) => setData({ ...data, [name]: value });

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.logoArea}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoDesc}>Say how the thing dey do you</Text>
      </View>
      <View style={styles.formArea}>
        {error && !error.includes("Email") && !error.includes("password") && (
          <Text style={{ textAlign: "center", color: "red" }}>
            {" "}
            {auth.error}{" "}
          </Text>
        )}
        <Input
          placeholder="Email"
          onChangeText={(value) => handleChange(value, "email")}
          errorStyle={{ color: "red" }}
          errorMessage={error && error.includes("Email") && error}
          autoCapitalize="none"
          autoComplete={false}
          style={styles.input}
        />
        <Input
          placeholder="Password"
          onChangeText={(value) => handleChange(value, "password")}
          errorStyle={{ color: "red" }}
          errorMessage={error && error.includes("password") && error}
          autoCapitalize="none"
          autoComplete={false}
          style={styles.input}
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              name={showPassword ? "eye-slash" : "eye"}
              onPress={(e) => setShowPassword(!showPassword)}
              size={24}
              color="#ccc"
            />
          }
        />
        <Button
          onPress={() => handleSubmit()}
          buttonStyle={styles.loginButton}
          title="Login"
          loading={loading}
        />
        <TouchableOpacity
          onPress={() => alert("Feature not ready yet")}
          style={styles.registerText}
        >
          <Text style={styles.forgotPasword}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <Text style={styles.forgotPasword}>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigate("Register")}>
          <Text style={styles.registerLink}>Register </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
  },
  logo: {
    width: 70,
    height: 70,
    justifyContent: "center",
  },
  logoArea: {
    alignItems: "center",
    flex: 1,
  },
  logoDesc: {
    color: "#316287",
    fontWeight: "600",
    marginTop: 25,
  },
  formArea: {
    flex: 5,
    paddingTop: 50,
    margin: 30,
  },
  input: {
    height: 80,
  },
  register: {
    flex: 2,
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
  registerText: {
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: "#316287",
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  forgotPasword: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "#999",
  },
  registerLink: {
    textAlign: "center",
    fontWeight: "600",
    color: "#316287",
    marginTop: 15,
  },
});

export default Login;
