import { notification } from 'antd';
export default {
    namespace: 'backMenu',
    state: {
        backSelectedKeys: ['part'],
        selectedTreeKeys: [],
        partData: [
            {
                name: '530区',
                key: 'one',
            },
            {
                name: '529区',
                key: 'two',
            },
            {
                name: '528区',
                key: 'three',
            },
        ],
        UnionData: [
            {
                name: '夜',
                key: 'four',
            },
            {
                name: '乱世',
                key: '2',
            },
            {
                name: '天下',
                key: '3',
            },
        ],
        GroupData: [
            {
                name: '梦起',
                key: '3',
            },
            {
                name: '龙腾',
                key: '4',
            },
            {
                name: '无极',
                key: '5',
            },
        ],
        TreeData: [
            {
                name: '530区',
                key: 'one',
                childList: [
                    {
                        name: '夜',
                        key: 'four',
                        childList: [
                            {
                                name: '梦起',
                                key: '1'
                            },
                            {
                                name: '龙腾',
                                key: '2'
                            },
                            {
                                name: '盟',
                                key: '3'
                            },
                            {
                                name: '北极',
                                key: '4'
                            }
                        ],
                    },
                    {
                        name: '缘聚天下',
                        key: 'five'
                    },
                    {
                        name: '天下',
                        key: 'six'
                    }
                ]
            },
            {
                name: '529区',
                key: 'two'
            },
            {
                name: '528区',
                key: 'three'
            },
        ],
        tableData: [
            {
                name: '小样儿别跑',
                duty: '盟主',
                key: '1'
            },
            {
                name: '喵喵儿不花',
                duty: '副盟主',
                key: '2'
            },
            {
                name: '小黑',
                duty: '团长',
                key: '3'
            },
        ]
    },

    effects: {

    },

    reducers: {
        changeState(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}