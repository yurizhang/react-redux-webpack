import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'


//import { Button,Alert } from 'element-react';
import 'element-theme-default';

import App,{SubComponent} from './containers/app.js'; //容器组件
import counter_SubComponent from './reducers/index.js';  // reducers createStore(counter),counter_SubComponent


// 生成Store
const store = createStore(counter_SubComponent)

ReactDOM.render(
  <Provider store={store}>
    <div>
    <App />
    <SubComponent />
    </div>
  </Provider>,
  document.getElementById('root')
)


/*
* `store` 由 Redux 的 `createStore(reducer)` 生成
* `state` 通过 `store.getState()` 获取，本质上一般是一个存储着整个应用状态的**对象**
* `action` 本质上是一个包含 `type` 属性的普通**对象**，由 Action Creator (**函数**) 产生
* 改变 `state` 必须 `dispatch` 一个 `action`
* `reducer` 本质上是根据 `action.type` 来更新 `state` 并返回 `nextState` 的**函数**
* `reducer` 必须返回值，否则 `nextState` 即为 `undefined`
* 实际上，**`state` 就是所有 `reducer` 返回值的汇总**（本教程只有一个 `reducer`，主要是应用场景比较简单）

> Action Creator => `action` => `store.dispatch(action)` => `reducer(state, action)` => ~~`原 state`~~ `state = nextState`
 */

