import React, { Component } from 'react';
import { Menu } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class BackMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick = e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                backSelectedKeys: [e.key]
            }
        })
    }

    render() {
        const { backSelectedKeys } = this.props;
        return (
            <div className={styles.menuBack}>
                <Menu
                    mode="inline"
                    selectedKeys={backSelectedKeys}
                    onClick={this.handleClick}
                    >
                    <Menu.Item key='part'>
                        组织架构管理
                    </Menu.Item>
                    {/* <Menu.Item key='union'>
                        盟管理
                    </Menu.Item>
 */}
                    <Menu.Item key='person'>
                        人员管理
                    </Menu.Item>
                    <Menu.Item key='personRight'>
                        人员权限设置
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
