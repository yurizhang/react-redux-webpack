import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Alert, Button,Table } from 'element-react';

export default class SubComponent extends Component {
    constructor(){
        super(); 
        this.state ={
           title:''
        }
    }
    componentWillMount() {        
        let id = 9999;
        this.props.getTest(id) //发送get请求，然后数据 自动写到state里
  }

  render() {
    console.log('另一个组件里的： this.props:');
    console.log(this.props);
    const { test="--", testData, onTest } = this.props;
    let columnName=[
      {
        label: "标题",
        prop: "title",
        width: 180
      },
      {
        label: "年份",
        prop: "year",       
      }
    ];
    return (
        <div>        
            <Alert title={test} type="info" />
            <Button type="primary" onClick={onTest}>Change</Button> 

            <Table
                    style={{width: '100%'}}
                    columns={columnName}
                    maxHeight={200}
                    data={testData.movies}
            />

        </div>     
    )
  }
}