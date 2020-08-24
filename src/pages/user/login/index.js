/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:19:02
 * @LastEditTime: 2020-08-23 13:06:31
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\pages\user\login\index.js
 * @
 */
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
const LoginPage = memo(function LoginPage(props) {
  return (
    <div>
      <Button type="default">登录</Button>
    </div>
  );
});

LoginPage.propTypes = {};

export default LoginPage;
