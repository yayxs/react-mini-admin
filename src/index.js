import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'antd/dist/antd.css';

import BasicLayout from './layouts/BasicLayout';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum</div>,
    main: () => <div>bubblegum</div>,
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces</div>,
    main: () => <h2>shoelaces</h2>,
  },
];

function Index(props) {
  const mes = { name: 'test', say: 'l react' };

  return (
    <div>
      {/* 开启history模式 */}
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <div
            style={{ padding: '10px', width: '40%', background: '#f0f0f0' }}
            className="left"
          >
            <ul>
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/bubblegum">bubblegum </Link>
              </li>
              <li>
                <Link to="/shoelaces">shoelaces </Link>
              </li>
            </ul>
            <div>
              <Switch>
                {routes.map((it, index) => {
                  return (
                    <Route
                      key={index}
                      path={it.path}
                      exact={it.exact}
                      children={<it.sidebar />}
                    ></Route>
                  );
                })}
              </Switch>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<BasicLayout />, document.getElementById('root'));
