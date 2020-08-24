/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:31:44
 * @LastEditTime: 2020-08-23 14:05:36
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\layouts\basicLayout\index.js
 * @
 */
import React, { memo } from "react";

import { Layout } from "antd";
import RenderRoutesPage from "../../router";
const { Header, Footer, Sider, Content } = Layout;
export default memo(function index() {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>
            <RenderRoutesPage />
          </Content>
        </Layout>
        <Footer>
          CRA-Admin ©{new Date().getFullYear()} Created by QQ交流群713593204
        </Footer>
      </Layout>
    </div>
  );
});
