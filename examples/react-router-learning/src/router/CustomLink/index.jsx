
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
  useRouteMatch,
} from "react-router-dom";

import React, { memo } from "react";
import Home from '../../components/Home'
import About from '../../components/About'
const MenuLink = ( {label,to,activeOnlyWhenExact } ) => {
    // console.log(label)
    // console.log(to)
    // console.log(activeOnlyWhenExact)

    const match = useRouteMatch({
        path:to,
        exact:activeOnlyWhenExact
    })
    console.log(match)
    return (
        <div className={match ? "active" : ""}>
          {match && "> "}
          <Link to={to}>{label}</Link>
        </div>
      );
};



export default memo(function index() {
  return (
    <Router>
      <section>
        <MenuLink activeOnlyWhenExact={true} to="/" label="Home"></MenuLink>
        <MenuLink to="/about" label="About" />
        <hr />
        <section>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </section>
      </section>
    </Router>
  );
});
