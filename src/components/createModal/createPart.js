import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class CreatePart extends Component {

    handleOk = () => {
        const { dispatch, addPartName } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPartModalVisible: false
            }
        })
    }

    handleCancel = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPartModalVisible: false
            }
        })
    }

    onChange =  e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPartName: e.target.value
            }
        })
    }

    render() {
        const { addPartModalVisible, addPartName } = this.props;
        return (
            <div>
                <Modal
                    title="新建区"
                    visible={addPartModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    maskClosable={false}
                    >
                        <div>
                            <span>名称：</span>
                            <Input
                                placeholder="请输入区名称"
                                className={styles.creatInput}
                                value={addPartName}
                                onChange={this.onChange}
                            />
                        </div>
                </Modal>
            </div>
        )
    }
}
