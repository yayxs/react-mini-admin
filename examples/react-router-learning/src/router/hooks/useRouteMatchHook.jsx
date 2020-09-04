import React, { memo ,useState} from "react";
import { Route, useRouteMatch, Link, Switch ,Redirect} from "react-router-dom";

import About from "../../components/About";
import Home from "../../components/Home";
import List from "../../components/List";
import Login from '../../components/Login'
export default memo(function UseRouteMatchHook() {
  const [isLogin,setIsLogin]  = useState(false)

  return (
    <div>
      <hr />
      <section>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/list",
                // search 传参是不推荐的
                search: "?id=123&name='张三'",
                hash: "",
                state: {
                  payload: {
                    desc: "这是state的数据",
                  },
                },
              }}
            >
              列表
            </Link>
          </li>
          <li>
            <Link to={{
              pathname:'/about'
            }}>关于</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/",
                search: "",
                hash: "",
                state: {},
              }}
            >
              首页
            </Link>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <Switch>
        <Redirect from='/about' to='/list' />
          <Route path="/list">
            <List />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {isLogin ?<Home />:<Redirect to="/login" /> }
          </Route>
        </Switch>
        
      </section>
    </div>
  );
});
