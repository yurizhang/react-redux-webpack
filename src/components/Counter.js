import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'element-react';



// React component
class Counter extends Component {
  render() {
    ////从组件的props属性中导入2个方法和一个变量
    const { value, onIncreaseClick, onDecreaseClick } = this.props;
    console.log('主组件里this.props:');
    console.log(this.props);
    return (
      <div>
        <span>{value}</span>     
        <Button type="primary" onClick={onIncreaseClick}>增加数据</Button>
        <Button type="primary" onClick={onDecreaseClick}>减少数据</Button>
        
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired
}

export default Counter