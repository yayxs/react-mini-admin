import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
// import { renderRoutes } from "react-router-config";
// import renderRoutes from "./utils/renderRoutes";
import ConfigLogin from "./components/configLogin";
import routes from "./routes";

const authed = false; //
const authPath = "/login"; // 默认未登录的时候返回的页面，可以自行设置
function App() {
  return <>Test </>;
}

export default App;
