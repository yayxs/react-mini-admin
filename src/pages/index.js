/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:05:16
 * @LastEditTime: 2020-08-30 21:34:27
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\pages\index.js
 * @
 */
import React, { memo } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "../router/PrivateRoute";
import App from "./App";
import routesConfig from "../router/config";
const RootPage = memo(function RootPage(props) {
  return (
    <Router>
      <Switch>
        {/* 当访问根据经定位到dashboard*/}
        <Route
          path="/"
          exact
          render={() => <Redirect to="/admin/dashboard" push />}
        ></Route>
        {/* 访问/admin  渲染APP 是需要登录才能访问*/}
        <Route path="/admin" render={(props) => <App {...props} />}></Route>
        {routesConfig["other"].map((item) => (
          <Route
            key={item.path}
            path={item.path}
            component={item.component}
          ></Route>
        ))}
        {/* 访问跟路径直接重定向到admin */}
        {/* <Redirect to="/admin" from="/" /> */}
        {/* 404 页面 */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
});

export default RootPage;
