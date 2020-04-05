import React, { Component } from 'react';
import { Modal, Input, Select } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const { Option } = Select;

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class CreatePerson extends Component {

    handleOk = () => {
        const { dispatch, addPersonName } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPersonModalVisible: false
            }
        })
    }

    handleCancel = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPersonModalVisible: false
            }
        })
    }

    onChange =  e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPersonName: e.target.value
            }
        })
    }

    onSelectedChange = e => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                addPersonDuty: e
            }
        })
    }

    render() {
        const { addPersonModalVisible, addPersonName, addPersonDuty } = this.props;
        return (
            <div>
                <Modal
                    title="新建人员"
                    visible={addPersonModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    maskClosable={false}
                    >
                        <div>
                            <span>名称：</span>
                            <Input
                                placeholder="请输入人员名称"
                                className={styles.creatInput}
                                value={addPersonName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <span>请选择人员职务：</span>
                            <Select
                                className={styles.creatselected}
                                value={addPersonDuty}
                                onChange={this.onSelectedChange}
                            >
                                <Option value='1'>盟主</Option>
                                <Option value='2'>副盟主</Option>
                                <Option value='3'>团长</Option>
                                <Option value='4'>普通成员</Option>
                            </Select>
                        </div>
                </Modal>
            </div>
        )
    }
}
