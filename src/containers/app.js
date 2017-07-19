/*容器组件 */
/* mapStateToProps, mapDispatchToProps把这个各自放到Counter和subCounter各自的组件里会不会更好? */
import { getData} from '../plugs/fetchData'

import { Message } from 'element-react';
import { connect } from 'react-redux'

import {increaseAction, decreaseAction, subTest, saveReducer} from '../action/actions.js';
import Counter from '../components/Counter.js';  //UI组件
import subCounter from '../components/subCounter.js'; 
// Map Redux state to component props
function mapStateToProps(state) {
  console.log('主容器组件里app:state:');
  console.log(state);
  return {
    value: state.counter.count,
   // test: state.SubComponent.test,
    //testData: state.SubComponent.testData
  }
}
//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => {
        dispatch(increaseAction());
        Message('你刚做了Add的操作');
    },  //调用Reducer
    onDecreaseClick: () => {
      dispatch(decreaseAction());
      Message('你刚做了减少的操作');
    }
  }
}
//如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
//这里建议的函数，组件可以通过 this.prop读取


// Map Redux state to component props
function mapSubStateToProps(state) {
  console.log('子容器组件里app:state:');
  console.log(state);
  return {
    //value: state.counter.count,
    test: state.SubComponent.test,
    testData: state.SubComponent.testData
  }
}

function mapSubCounterDispatchToProps(dispatch) {
  return {
    onTest: () => {
      dispatch(subTest());  
      Message('你刚做了subTest的操作');
    },  //调用Reducer
    getTest:(id)=> {
        try {
            getData(`/facebook/react-native/master/docs/MoviesExample.json`,{id:id}).then(response=>{
             //axios返回的数据是用response.data包括的，和jquery不一样
              console.log(response.data);
              dispatch(saveReducer(response.data));
           })
            // let response = await getData(`/facebook/react-native/master/docs/MoviesExample.json?id=${id}`)
            // await dispatch(saveReducer(response.data))
        } catch (error) {
            console.log('error: ', error)
        }
      
    }
  }
}

// Connected Component
export const SubComponent= connect(
  mapSubStateToProps,
  mapSubCounterDispatchToProps
)(subCounter) 

const App= connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter) 


export default App
//连接 UI组件Counter 生成一个容器组件App
//connect方法接受两个参数：mapStateToProps和mapDispatchToProps。
//它们定义了 UI 组件的业务逻辑。
//前者负责输入逻辑，即将state映射到 UI 组件的参数（props）， mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
//后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。