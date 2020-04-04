import React, { Component } from 'react';
import { Table, Button, Select, Input } from 'antd';
import ExportJsonExcel from 'js-export-excel';
import { connect } from 'dva';
import styles from './index.less';

const { Option } = Select;
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

    renderOptions = data => {
      let arr = []
      if (data.length > 0) {
        arr = data.map(item => {
          return <Option key={item.key} value={item.key}>{item.name}</Option>
        })
      }
      return arr
    }
  
    onSelectedChange = e => {
      const { dispatch } = this.props;
      dispatch({
        type: 'menu/changeState',
        payload: {
          selectedGroup: e
        }
      })
    }
  
    onInputChange = e => {
      const { dispatch } = this.props;
      dispatch({
        type: 'menu/changeState',
        payload: {
          selectedName: e.target.value
        }
      })
    }
  
    onSearch = () => {
      const { selectedGroup, selectedName, dispatch } = this.props;
      dispatch({
        type: 'menu/searchTableData',
        payload: {
          selectedName,
          selectedGroup
        }
      })

    }
  
    render() {
        const { tableData, GroupData, selectedGroup, selectedName } = this.props;
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
                  <div className={styles.searchPart}>
                    <span>请选择团：</span>
                    <Select
                      className={styles.selectedGroup}
                      value={selectedGroup}
                      onChange={this.onSelectedChange}
                      >
                      {this.renderOptions(GroupData)}
                    </Select>
                    <span>请输入名称：</span>
                    <Input 
                      className={styles.selectedGroup}
                      value={selectedName}
                      onChange={this.onInputChange}
                    />
                    <Button 
                      type="primary"
                      onClick={this.onSearch}
                      style={{ marginTop: 10 }}
                    > 
                    查询
                    </Button>
                  </div>
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
