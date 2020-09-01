import React from "react";

import {
  Switch,
  HashRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const ItemComp = () => {
  const { id } = useParams();
  return <h4>{id}</h4>;
};

const Home = () => {
  return <>Home</>;
};
const Topic = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>/topic/rendering</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>/topic/components</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>{path}</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <ItemComp />
        </Route>
      </Switch>
    </>
  );
};

function Nesting() {
  return (
    <Router>
      <div className="App">
        <section>
          <Link to="/home">首页</Link>
          <Link to="/topic">话题</Link>
        </section>

        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nesting;
