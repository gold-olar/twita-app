import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import logo from "../../../assets/splash.png";

const Login = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.logoArea}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoDesc}>Say how the thing dey do you</Text>
      </View>
      <View style={styles.formArea}>
        <Input
          placeholder="Email"
          errorStyle={{ color: "red" }}
          //   errorMessage="Enter a valid email address"
          autoCapitalize="none"
          autoComplete={false}
          style={styles.input}
        />
        <Input
          placeholder="Password"
          errorStyle={{ color: "red" }}
          //   errorMessage="Password is incorrect"
          autoCapitalize="none"
          autoComplete={false}
          style={styles.input}
          secureTextEntry={true}
        />
        <Button
          onPress={() => navigate("Dashboard")}
          buttonStyle={styles.loginButton}
          title="Login"
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
