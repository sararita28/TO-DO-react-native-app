import React from "react";
import "localstorage-polyfill";
import axios from "axios";
import Navigator from "./app/routes/landingStack";

axios.defaults.baseURL = "http://10.0.2.2:3001/api";

export default function App() {
  return <Navigator />;
}
