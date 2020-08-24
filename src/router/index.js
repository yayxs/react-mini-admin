/*
 * @Author: yayxs
 * @Date: 2020-08-23 11:56:03
 * @LastEditTime: 2020-08-23 14:13:55
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\router\index.js
 * @
 */
import React, { memo } from "react";
import DocumentTitle from "react-document-title";

import { Switch, Route, Redirect } from "react-router-dom";

import AllComps from "../components";
import routesConfig from "./routesConfig";

export default memo(function index() {
  return (
    <>
      <Switch>
        {Object.keys(routesConfig).map((key) => {
          return routesConfig[key].map((config) => {
            console.log(config);
            // {path: "/admin/dashboard/index", title: "首页", icon: "mobile", component: "Dashboard"}
            // {path: "/admin/ui", title: "视图", icon: "scan", children: Array(1)}
            const renderRoute = (config) => {
              // 取到路由对应的组件

              const Comp = AllComps[config.component];

              return (
                <Route
                  key={config.path}
                  exact
                  path={config.path}
                  render={(props) => {
                    // 定义包裹组件
                    const WrappedComponent = (
                      <DocumentTitle title={config.title}>
                        <Comp {...props} />
                      </DocumentTitle>
                    );

                    return WrappedComponent;
                  }}
                ></Route>
              );
            };

            return config.component
              ? renderRoute(config)
              : config.children.map((r) => renderRoute(r));
          });
        })}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </>
  );
});
