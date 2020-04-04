import React, { Component } from 'react';
import { Table, Button } from 'antd';
import ExportJsonExcel from 'js-export-excel';
import { connect } from 'dva';
import styles from './index.less';

@connect(({ menu }) => ({
    ...menu
}))
export default class TableList extends Component {
    constructor(props) {
        super(props);
    }

    downloadExcel = () => {
        const { tableData } = this.props;
        const data = tableData;//表格数据
          var option={};
          let dataTable = [];
          if (data) {
            for (let i in data) {
              if(data){
                let obj = {
                  '组织ID': data[i].name,
                  '组织代码': data[i].chinese,
                  '组织名称': data[i].math,
                }
                dataTable.push(obj);
              }
            }
          }
          option.fileName = '组织信息'
          option.datas=[
            {
              sheetData:dataTable,
              sheetName:'sheet',
              sheetFilter:['组织ID','组织代码','组织名称'],  
              sheetHeader:['组织ID','组织代码','组织名称'],
            }
          ];
        
          var toExcel = new ExportJsonExcel(option); 
          toExcel.saveExcel();        
        }

    render() {
        const { tableData } = this.props;
        const columns = [
            {
              title: '名称',
              dataIndex: 'name',
            },
            {
              title: 'Chinese Score',
              dataIndex: 'chinese',
              sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
              },
            },
            {
              title: 'Math Score',
              dataIndex: 'math',
              sorter: {
                compare: (a, b) => a.math - b.math,
                multiple: 2,
              },
            },
            {
              title: 'English Score',
              dataIndex: 'english',
              sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
              },
            },
          ];
        return (
            <div>
                <div className={styles.exportButton}>
                    <Button
                        onClick={this.downloadExcel}
                        className={styles.export}
                    >导出Excel表格
                    </Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    onChange={this.onChange}
                    pagination={false}
                    size='small'
                />
            </div>
        )
    }
}
