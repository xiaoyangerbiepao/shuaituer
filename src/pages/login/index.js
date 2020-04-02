import React, { Component } from 'react';
import { Button, Input, Form } from 'antd';
import { history } from 'umi';
import styles from './index.less';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  onFinish = value => {
    console.log('value', value);
    history.push({
      pathname: '/list',
      // query: {
      //   a: 'b',
      // },
    });
  };

  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const tailLayout = {
      wrapperCol: { offset: 4, span: 20 },
    };

    return (
      <div
        style={{ background: `url(${require('../../image/wei.jpg')})` }}
        className={styles.login_box}
      >
        <div className={styles.login}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="账户"
              name="username"
              rules={[{ required: true, message: '请输入您的账户!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入您的密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
