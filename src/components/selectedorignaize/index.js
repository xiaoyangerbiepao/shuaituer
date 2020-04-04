import React, { Component } from 'react';
import { Button, Select } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const { Option } = Select;

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class Selectedorignaize extends Component {

    renderOptions = data => {
        let arr = []
        if (data.length > 0) {
          arr = data.map(item => {
            return <Option key={item.key} value={item.key}>{item.name}</Option>
          })
        }
        return arr
      }
    render() {
        const { GroupData, UnionData, partData} = this.props;
        return (
            <div className={styles.selectedPart}>
                <div>
                    <span>请选择区：</span>
                    <Select className={styles.selectedOrignation}>
                        {this.renderOptions(partData)}
                    </Select>
                    <span>请选择联盟：</span>
                    <Select className={styles.selectedOrignation}>
                        {this.renderOptions(UnionData)}
                    </Select >
                    <span>请选择团：</span>
                    <Select className={styles.selectedOrignation}>
                        {this.renderOptions(GroupData)}
                    </Select>
                </div>
                <div>
                    <Button style={{ marginRight: 15 }}>设置人员权限</Button>
                    <Button style={{ marginRight: 15 }}>新建</Button>
                    <Button>违规扣分</Button>
                </div>
            </div>
        )
    }
}
