/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:05:22
 * @LastEditTime: 2020-08-30 21:52:18
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\pages\App.js
 * @
 */
import React, { memo, useState } from "react";
import { Redirect } from "react-router-dom";
import DocumentTitle from "react-document-title";
import BaseLayout from "../layouts/basicLayout";
import RenderRoutes from "../router";
import { isLogined } from "../utils/auth";
import "../styles/App.scss";
const App = memo(function App(props) {
  const [title, setTitle] = useState("welcome");

  return (
    <DocumentTitle title={title}>
      {isLogined() ? (
        <>
          <BaseLayout>
            <RenderRoutes />
          </BaseLayout>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </DocumentTitle>
  );
});

export default App;
