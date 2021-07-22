import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import routesConfig from './config';

const RenderRoutes = () => {
  return (
    <Switch>
      {routesConfig['menus'].map((route) => {
        const renderComp = (route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(props) => <route.component {...props} />}
            ></Route>
          );
        };

        return route.component
          ? renderComp(route)
          : route.subs.map((r) => renderComp(r));
      })}

      <Redirect to={routesConfig['menus'][0].path} from="/admin" />
      {/* 都未命中 */}
      <Redirect to="/404" />
    </Switch>
  );
};

export default RenderRoutes;
