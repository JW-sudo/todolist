/**
 * 定义todo项目的action
 * 理解参考：https://redux.js.org/basics/actions
 */


let nextTodoId = 0

/*
 * action creators
 */
// 定义一个添加的action
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

//定义一个设置当前的任务展示选项
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

// 定义一个切换的action
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})



/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
