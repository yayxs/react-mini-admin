import React, { memo } from "react";

import { Switch, Route, useParams } from "react-router-dom";

const Home = () => {
  return <h3>Home页面</h3>;
};
const About = () => {
  return <h3>About页面</h3>;
};

const List = () => {
  return <h3>List页面</h3>;
};
const Detail = () => {
  const { id } = useParams();
  return <h3>详情页面{id}</h3>;
};
// route 渲染 方法
export default memo(function RouteComp() {
  return (
    <Switch>
      <Route
        path="/list"
        render={(props) => {
          console.log(props);
          return <List></List>;
        }}
      ></Route>
      {/* 直接 使用 about  */}
      <Route path="/about">
        <About />
      </Route>
      {/* 使用component 渲染对应的视图 */}
      <Route path="/detail/:id" component={Detail} />

      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
});
