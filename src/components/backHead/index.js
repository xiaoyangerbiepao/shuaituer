import React, { Component } from 'react';
import { Button } from 'antd';

import { history } from 'umi';
import {
    RollbackOutlined,
  } from '@ant-design/icons';
import styles from './index.less';

export default class BackHead extends Component {

    goBack = () => {
        history.push('/list')
    }

    render() {
        return (
            <div className={styles.back_head}>
                <span
                    className={styles.goback}
                    onClick={this.goBack}
                    >
                    <RollbackOutlined />
                    返回</span>
                <span className={styles.headName}>夜盟成员管理系统</span>
                <Button className={styles.setRules}>设置积分管理规则</Button>
            </div>
        )
    }
}
