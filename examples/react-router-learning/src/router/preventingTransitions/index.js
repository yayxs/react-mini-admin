import React, { memo ,useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt,
} from "react-router-dom";

const BlockingForm = () => {
  const [isBlocking, setIsBlocking] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <Prompt
        when={isBlocking}
        message={(location) =>
          `你确定跳转到${location.pathname}`
        }
      />
      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={(event) => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>直接提交</button>
      </p>
    </form>
  );
};
export default memo(function index() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact children={<BlockingForm />} />
        <Route path="/one" children={<h3>One</h3>} />
        <Route path="/two" children={<h3>Two</h3>} />
      </Switch>
    </Router>
  );
});
