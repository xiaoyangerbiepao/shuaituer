import { notification } from 'antd';
import moment from 'moment';

export default {
    namespace: 'menu',
    state: {
        endTime: moment(new Date()).format('YYYY-MM-DD'),
        startTime: null,
        selectedName: '', // 搜索姓名
        selectedGroup: '0', // 默认选中所有图
        GroupData: [
            {
                name: '全部',
                key: '0'
            },
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
        menuList: [
            {
                name: '530区',
                key: 'one',
                child: [
                    {
                        name: '夜',
                        key: 'four',
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
        selectedMenuKeys: [],
        tableData: [
            {
              key: '1',
              name: 'John Brown',
              chinese: 98,
              math: 60,
              english: 70,
            },
            {
              key: '2',
              name: 'Jim Green',
              chinese: 98,
              math: 66,
              english: 89,
            },
            {
              key: '3',
              name: 'Joe Black',
              chinese: 98,
              math: 90,
              english: 70,
            },
            {
              key: '4',
              name: 'Jim Red',
              chinese: 88,
              math: 99,
              english: 89,
            },
          ]
          
    },

    effects: {
        *searchTableData({ payload }, { put, call, select }) {

        },

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