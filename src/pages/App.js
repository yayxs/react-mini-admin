/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:05:22
 * @LastEditTime: 2020-08-23 13:13:55
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\pages\App.js
 * @
 */
import React, { memo, useState } from "react";
import DocumentTitle from "react-document-title";
import BasicLayout from "../layouts/basicLayout";
const App = memo(function App(props) {
  const [title, setTitle] = useState("");

  return (
    <>
      <DocumentTitle title={title}>
        <BasicLayout></BasicLayout>
      </DocumentTitle>
    </>
  );
});

export default App;
