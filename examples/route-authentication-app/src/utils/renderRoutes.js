import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
const renderRoutes = (
  routes,
  authed,
  authPath = "/login",
  extraProps = {},
  switchProps = {}
) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            /**
             * 如果 route.requiresAuth = false 或者 authed = true
             * 或者 route.path === authPath（参数默认值'/login'）则渲染我们页面，
             */
            if (!route.requiresAuth || authed || route.path === authPath) {
              return (
                <route.component {...props} {...extraProps} route={route} />
              );
            }

            return (
              <Redirect
                to={{ pathname: authPath, state: { from: props.location } }}
              />
            );
          }}
        />
      ))}
    </Switch>
  ) : null;
export default renderRoutes;
