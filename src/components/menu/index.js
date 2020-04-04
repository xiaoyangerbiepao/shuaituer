import React, { Component } from 'react';
import { connect } from 'dva';
import { Menu } from 'antd';
import styles from './index.less';

const { SubMenu } = Menu;

@connect(({ menu }) => ({
    ...menu
}))
export default class Menus extends Component {

    rederMenu = data => 
        data.map(item => {
            if (item.child && item.child.length > 0) {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <span>{item.name}</span>
                            </span>
                          }
                        >
                        {this.rederMenu(item.child)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item
                    key={item.key}
                    >
                    <span>{item.name}</span>
                </Menu.Item>
            )
        })
    
    handleClick = e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'menu/changeState',
            payload: {
                selectedMenuKeys: [e.key]
            }
        })
    }

    render() {
        const { menuList, selectedMenuKeys } = this.props;
        return (
            <div className={styles.menuLine}>
                <Menu
                    mode="inline"
                    selectedKeys={selectedMenuKeys}
                    onClick={this.handleClick}
                    >
                    {this.rederMenu(menuList)}
                </Menu>
            </div>
        )
    }
}
