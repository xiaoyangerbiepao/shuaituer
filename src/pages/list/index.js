import React, { Component } from 'react';
import Menu from '@/components/menu';
import PersonTable from '@/components/table';
import { history } from 'umi';
import styles from './index.less';

export default class list extends Component {

    gobackset = () => {
        history.push('/backset')
    }

    render() {
        return (
            <div className={styles.list_content}>
                <div className={styles.head}>
                    <span>夜盟</span>
                    <span
                        className={styles.gobackset}
                        onClick={this.gobackset}
                    >后台设置</span>
                </div>
                <div className={styles.Content}>
                    <div className={styles.menus}>
                        <Menu />
                    </div>
                    <div className={styles.tableList}>
                        <PersonTable />
                    </div>
                </div>
            </div>
        )
    }
}
