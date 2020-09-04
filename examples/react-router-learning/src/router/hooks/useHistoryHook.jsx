import React, { memo } from "react";

import Home from "../../components/Home";
import About from "../../components/About";
import { useHistory, Switch, Route } from "react-router-dom";

export default memo(function Index() {
  const history = useHistory();
  const handleClick = () => {
    console.log(history);
    history.push('/about')
  };
  return (
    <>
      <hr />

      <ul>
        <li>
          <button onClick={(e) => handleClick(e)}>按钮点击</button>
        </li>
        <li></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
});
