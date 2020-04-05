import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class ModifyName extends Component {

    handleOk = () => {
        const { dispatch, selectedName } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                modifyNameModalVisible: false
            }
        })
    }

    handleCancel = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                modifyNameModalVisible: false
            }
        })
    }

    onChange =  e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                selectedName: e.target.value
            }
        })
    }

    render() {
        const { modifyNameModalVisible, selectedName } = this.props;
        return (
            <div>
                <Modal
                    title="修改名称"
                    visible={modifyNameModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    maskClosable={false}
                    >
                        <div>
                            <span>名称：</span>
                            <Input
                                className={styles.creatInput}
                                value={selectedName}
                                onChange={this.onChange}
                                placeholder="请输入名称"
                            />
                        </div>
                </Modal>
            </div>
        )
    }
}
