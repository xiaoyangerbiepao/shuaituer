import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class CreateUnion extends Component {

    handleOk = () => {
        const { dispatch, addUnionName } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addUnionModalVisible: false
            }
        })
    }

    handleCancel = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addUnionModalVisible: false
            }
        })
    }

    onChange =  e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addUnionName: e.target.value
            }
        })
    }

    render() {
        const { addUnionModalVisible, addUnionName } = this.props;
        return (
            <div>
                <Modal
                    title="新建盟"
                    visible={addUnionModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    maskClosable={false}
                    >
                        <div>
                            <span>名称：</span>
                            <Input
                                className={styles.creatInput}
                                value={addUnionName}
                                onChange={this.onChange}
                                placeholder="请输入联盟名称"
                            />
                        </div>
                </Modal>
            </div>
        )
    }
}
