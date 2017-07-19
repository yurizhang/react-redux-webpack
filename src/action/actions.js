/*
 * action 类型
 */
// Action
// export const increaseAction = { type: 'increase' }
// export const decreaseAction = { type: 'decrease' }
// export const subTest = { type: 'test' }

export const increaseAction = (text) => {
  return { type: 'increase', text }
}

export const decreaseAction = (text) => {
  return { type: 'decrease', text }
}

export const subTest = (text) => {
  return { type: 'test', text }
}

//返回一个action对象，用来关联对应的reducer，将data保存到store。
export const saveReducer = (data) => ({
    type: 'SAVE_REDUCER',
    data
})

