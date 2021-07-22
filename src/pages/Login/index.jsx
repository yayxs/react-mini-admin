import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return <>Login</>;
  }
}

export default Login;
