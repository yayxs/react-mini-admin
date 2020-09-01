/*
 * @Author: yayxs
 * @Date: 2020-08-23 12:31:44
 * @LastEditTime: 2020-08-30 21:45:43
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\layouts\basicLayout\index.js
 * @
 */
import React, { memo } from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { adminRoutes } from "../../router";

import "./index.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
export default memo(function index({ children }) {
  return (
    <Layout className="layout-container">
      <Header className="header">
        <div className="logo">
          <Avatar src="https://yayxs.github.io/avatar.jpg" />
        </div>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
      </Header>
      <Layout>
        <Sider width={200} className="layout_sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {adminRoutes.map((item) => {
              return (
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
          <Content
            className="content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
