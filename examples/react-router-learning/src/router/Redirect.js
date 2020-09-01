import React, { memo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
const LoginPage =()=>{

    return (
       <div>
        <h4>登录界面</h4>
       </div>
    )
}

const PublicPage =()=>{

    return (
        <div>
        <h4>都是可以访问的界面</h4>
       </div>
    )
}
// 没有验证身份跳转到 登录页
const PrivateRoute = ({children,...reset})=>{

    return (
        <Route
        {...reset}

        ></Route>
    )
}


export default memo(function RedirectComp() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">都可以看的页面</Link>
          </li>
          <li>
            <Link to="/protected">受保护页面</Link>
          </li>
        </ul>
            {/* 路由出口 */}
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            {/* <ProtectedPage /> */}
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
});
