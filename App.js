import "react-native-gesture-handler";
import React from "react";
import App_ from "./src/app";
import axios from "axios";

axios.defaults.baseURL =
  "https://europe-west1-socialapp-e6c50.cloudfunctions.net/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return <App_ />;
}
export default App;
