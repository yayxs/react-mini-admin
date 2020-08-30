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

import App from "./App";
import { mainRoutes } from "../router";
const RootPage = memo(function RootPage(props) {
  return (
    <Router>
      <Switch>
        {/* 访问/admin  渲染APP*/}
        <Route path="/admin" render={(props) => <App {...props} />}></Route>
        {mainRoutes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            component={item.component}
          ></Route>
        ))}
        {/* 404 页面 */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
});

export default RootPage;
