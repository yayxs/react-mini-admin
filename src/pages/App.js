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
import DocumentTitle from "react-document-title";
import BaseLayout from "../layouts/basicLayout";
import "../styles/App.scss";
const App = memo(function App(props) {
  const [title, setTitle] = useState("welcome");

  return (
    <>
      <DocumentTitle title={title}>
        <BaseLayout></BaseLayout>
      </DocumentTitle>
    </>
  );
});

export default App;
