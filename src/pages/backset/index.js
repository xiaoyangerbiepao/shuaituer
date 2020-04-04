import React, { Component } from 'react';
import HeadBack from '@/components/backHead';
import BackMenu from '@/components/BackMenu';
import { connect } from 'dva';
import Part from '@/components/Part';
import Union from '@/components/Union';
import Group from '@/components/Group';
import Person from '@/components/Person';
import styles from './index.less';

@connect(({ backMenu }) => ({
    ...backMenu
}))
export default class index extends Component {
    render() {
        const { backSelectedKeys } = this.props;
        return (
            <div className={styles.back_content}>
                <HeadBack />
                <div className={styles.back_menu}>
                    <BackMenu />
                    <div className={styles.back_detail}>
                        {
                            backSelectedKeys[0] === 'part' ? <Part />  : <Person />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
