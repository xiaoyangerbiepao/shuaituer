import React, { Component } from 'react';
import { connect } from 'dva';
import Selectedorignaize from '../selectedorignaize';
import { Table } from 'antd';

import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class Person extends Component {
    render() {
        const { tableData } = this.props;
        const columns = [
            {
              title: '名称',
              dataIndex: 'name',
            },
            {
                title: '职务',
                dataIndex: 'duty',
            },
            {
                title: '操作',
                dataIndex: 'option',
                render: (text, record) => (
                    <span className={styles.modifyRight}>
                      修改
                    </span>
                  ),
            },
          ];
        return (
            <div>
                <Selectedorignaize />
                <Table
                    columns={columns}
                    dataSource={tableData}
                    onChange={this.onChange}
                    pagination={false}
                    size='small'
                />
            </div>
        )
    }
}
