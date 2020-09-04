import React, { memo, useState } from "react";

import Home from "../../components/Home";
import About from "../../components/About";
import {
  useLocation,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";

export default memo(function Index() {
  const location = useLocation();

  const history = useHistory();
  const handleClick = (e) => {
    history.push("/about/1");
  };

  useState(() => {
    // {pathname: "/about", search: "", hash: "", state: undefined}
    // console.log(location);
  }, []);

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
        <Route path="/about/:id">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
});
