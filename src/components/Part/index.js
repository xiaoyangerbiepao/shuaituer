import React, { Component } from 'react'
import { Tree, Button, Modal } from 'antd';
import { connect } from 'dva';
import CreateGroup from '../createModal/createGroup';
import CreatePart from '../createModal/createPart';
import CreateUnion from '../createModal/createUnion';
import ModifyName from '../createModal/modifyName';
import CopyUnion from '../createModal/copyUnion';
import styles from './index.less';

const { TreeNode } = Tree;

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class Part extends Component {

    onSelectTree = (selectedKeys, info) => {
        const { dispatch, TreeData } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                selectedTreeKeys: selectedKeys,
                selectedName: info.node.title
            }
        })
    } 

    addNewPart = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPartModalVisible: true
            }
        })
    }

    addNewUnion = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addUnionModalVisible: true
            }
        })
    }

    addNewGroup = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addGroupModalVisible: true
            }
        })
    }

    delete = () => {
        Modal.confirm({
            title: '确定要删除么',
            onOk: this.confirmDel
        })
    }
    
    confirmDel = () => {
        alert('2')
    }

    modifyName = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                modifyNameModalVisible: true
            }
        })
    }

    copyUnion = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                copyUnionModalVisible: true
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
        const {
            selectedTreeKeys,
            TreeData,
        } = this.props;
        return (
            <div className={styles.back_con_detail}>
                <div className={styles.addPart}>
                    <Button onClick={this.addNewPart}>新建区</Button>
                    <Button onClick={this.addNewUnion}>新建盟</Button>
                    <Button onClick={this.copyUnion}>复制盟</Button>
                    <Button onClick={this.addNewGroup}>新建团</Button>
                    <Button onClick={this.delete}>删除</Button>
                    <Button onClick={this.modifyName} disabled={selectedTreeKeys.length === 0}>修改名称</Button>
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
                <CreateGroup />
                <CreatePart />
                <CreateUnion />
                <ModifyName />
                <CopyUnion />
            </div>
        )
    }
}
