import React, { Component } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

export default class index extends Component {

    reLogin = () => {
        history.push('/login');
    }
    render() {
        return (
            <div className={styles.notFound}>
                访问的页面不存在，请返回重新登陆<br></br>
                <Button onClick={this.reLogin}>重新登陆</Button>
            </div>
        )
    }
}
