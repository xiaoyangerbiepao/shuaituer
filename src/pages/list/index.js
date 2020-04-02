import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';

const { SubMenu } = Menu;

export default class list extends Component {
  render() {
    return (
      <div className={styles.list_content}>
        <div className={styles.head}>夜盟</div>
        <div className={styles.Content}>
          <div className={styles.menus}></div>
          <div className={styles.tableList}></div>
        </div>
      </div>
    );
  }
}
