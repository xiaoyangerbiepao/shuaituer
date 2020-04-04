import React, { Component } from 'react'
import { Tree, Button } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const { TreeNode } = Tree;

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class Part extends Component {

    onSelectTree = (selectedKeys, info) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                selectedTreeKeys: selectedKeys
            }
        })
    } 

    renderTree = data => (
        data.map(item => {
            if (item.childList && item.childList.length > 0) {
                return (
                    <TreeNode
                        title={item.name}
                        key={item.key}
                        dataRef={item}
                    >
                        {this.renderTree(item.childList)}
                    </TreeNode>
                )
            }
            return <TreeNode                         
                        title={item.name}
                        key={item.key}
                        dataRef={item}>
                    </TreeNode>
        })
    )
    render() {
        const { selectedTreeKeys, TreeData } = this.props;
        return (
            <div className={styles.back_con_detail}>
                <div className={styles.addPart}>
                    <Button>新建区</Button>
                    <Button>新建盟</Button>
                    <Button>复制盟</Button>
                    <Button>新建团</Button>
                    <Button>删除</Button>
                </div>
                <div className={styles.Trees_con}>
                    <Tree
                        draggable
                        selectedKeys={selectedTreeKeys}
                        onSelect={this.onSelectTree}
                    >
                        {this.renderTree(TreeData)}
                    </Tree>
                </div>
            </div>
        )
    }
}
