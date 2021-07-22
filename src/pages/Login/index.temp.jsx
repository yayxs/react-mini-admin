import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
// import { fakeAuth } from '../../../utils/config';
import comLocalStorage from '../../../utils/comLocalStorage';
import { setToken } from '../../../utils/auth';
import './index.scss';
const LoginPage = memo(function LoginPage(props) {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  // 其中 from {pathname: "/"}
  const { from } = location.state || { from: { pathname: '/admin' } };

  console.log(from);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // 修改状态仅仅模拟
    const params = {
      userName: 'admin',
      password: 'admin',
    };
    axios
      .post(`/api/login/account`, {
        userName: 'admin',
        password: 'admin',
        type: 'hah',
      })
      .then((res) => {
        console.log(res);

        comLocalStorage.set('token', `123`);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
    // history.replace(from);

    // fakeAuth.authenticate(()=>{
    //   history.replace(from);
    // })
  };
  return (
    <section className="login_wrap">
      <Card title="React-CRA-Admin" className="card_container">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
            Forgot password
          </a>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
});

export default LoginPage;
