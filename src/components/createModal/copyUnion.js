import React, { Component } from 'react';
import { Modal, Select } from 'antd';
import { connect } from 'dva';
import styles from './index.less';
const { Option } = Select;
@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class CreatePart extends Component {

    handleOk = () => {
        const { dispatch, addGroupName } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                copyUnionModalVisible: false
            }
        })
    }

    handleCancel = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'backMenu/changeState',
            payload: {
                copyUnionModalVisible: false
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
        const { copyUnionModalVisible, copyUnion } = this.props;
        return (
            <div>
                <Modal
                    title="复制盟"
                    visible={copyUnionModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    maskClosable={false}
                    >
                        <div className={styles.titleInfo}>
                            提示：复制功能只复制联盟的成员编制，不会复制成员之前的积分武训翻地等记录，建议在新开区服一键复制。
                        </div>
                        <div>
                            <span>请选择要复制到的区：</span>
                            <Select
                                style={{ width: 150 }}
                                value={copyUnion}
                                onChange={this.onChange}
                                placeholder="请输入团名称"

                            >
                                <Option value='1'>320</Option>
                                <Option value='2'>321</Option>
                            </Select>
                        </div>
                </Modal>
            </div>
        )
    }
}
