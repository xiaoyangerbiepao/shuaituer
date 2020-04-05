import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class CreatePart extends Component {

    handleOk = () => {
        const { dispatch, addGroupName } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addGroupModalVisible: false
            }
        })
    }

    handleCancel = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addGroupModalVisible: false
            }
        })
    }

    onChange =  e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addGroupName: e.target.value
            }
        })
    }

    render() {
        const { addGroupModalVisible, addGroupName } = this.props;
        return (
            <div>
                <Modal
                    title="新建团"
                    visible={addGroupModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    maskClosable={false}
                    >
                        <div>
                            <span>名称：</span>
                            <Input
                                className={styles.creatInput}
                                value={addGroupName}
                                onChange={this.onChange}
                                placeholder="请输入团名称"

                            />
                        </div>
                </Modal>
            </div>
        )
    }
}
