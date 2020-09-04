import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const ConfigLogin = memo(function ConfigLogin({ isLogin, history, children }) {
  useEffect(() => {
    if (!isLogin) {
      setTimeout(() => {
        history.push("/login");
      }, 300);
    }
  }, [history, isLogin]);
  return { children };
});

ConfigLogin.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default withRouter(ConfigLogin);
