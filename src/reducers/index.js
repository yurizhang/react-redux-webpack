import { combineReducers } from 'redux'
// Action
// const increaseAction = { type: 'increase' }
// const decreaseAction = { type: 'decrease' }

// Reducer
 function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'decrease':
      return { count: count - 1 }      
    default:
      return state
  }
}

let initState = {
    testData: [],
    test: 'default'
}
 function SubComponent(state = initState, action) {  
  switch (action.type) {
    case 'test':
      return { ...state, test: 'test12345' }
    case 'SAVE_REDUCER':
      return {
          ...state,
          testData: action.data
      }      
    default:
      return state
  }
}

//以后的业务里 这些reducers拆分成多个，这里分别导入进来

const counter_SubComponent = combineReducers({
  counter,
  SubComponent
})

export default counter_SubComponent;
//合并reducers让 const store = createStore(counter_SubComponent)生成一个状态
