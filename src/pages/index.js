/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:05:16
 * @LastEditTime: 2020-08-23 13:43:44
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\pages\index.js
 * @
 */
import React, { memo } from "react";
import {
  HashRouter as RootRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import App from "./App";
import NoFoundPage from "./404";
import LoginPage from "./user/login";
const RootPage = memo(function RootPage(props) {
  return (
    <RootRouter>
      <Switch>
        {/* 访问跟路径重定向到index */}
        <Route
          exact
          path="/"
          render={() => <Redirect to="/admin/dashboard/index" push />}
        />
        {/* 访问/admin  渲染APP*/}
        <Route path="/admin" component={App}></Route>
        {/* 404页面 */}
        <Route path="/404" component={NoFoundPage}></Route>
        {/* 登录 */}
        <Route path="/login" component={LoginPage}></Route>
        {/* 都未匹配 */}
        <Route component={NoFoundPage}> </Route>
      </Switch>
    </RootRouter>
  );
});

// RootPage.propTypes = {};

export default RootPage;
