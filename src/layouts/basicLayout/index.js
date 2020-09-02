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
import { withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  MailOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import routesConfig from "../../router/config";

import "./index.scss";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


const BasicLayout = ({ children ,history})=>{

  const handleClickMenuItem = ({key}) => {
    
    // 其中key是/admin/table/basicTable
    history.push(key)
  };
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
            // defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {routesConfig['menus'].map((item) => {
              
              return (
                <SubMenu
                  key={item.path}
                  title={
                    <span>
                      <MailOutlined />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.subs &&
                    item.subs.map((sub) => {
                      return <Menu.Item   onClick={(p)=>handleClickMenuItem(p)} key={sub.path}>{sub.title}</Menu.Item>;
                    })}
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

}


export default withRouter(BasicLayout ) ;
