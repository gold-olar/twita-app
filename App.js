import "react-native-gesture-handler";
import React from "react";
import App_ from "./src/app";
import axios from "axios";
import { AsyncStorage } from "react-native";

const getToken = async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
};

axios.defaults.baseURL =
  "https://europe-west1-socialapp-e6c50.cloudfunctions.net/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Authorization"] = `Bearer ${getToken()}`;

function App() {
  return <App_ />;
}
export default App;
