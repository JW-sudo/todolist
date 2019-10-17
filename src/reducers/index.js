/**
 * 项目需要可以一个组件写一个reducer.js然后用combineReducers合并在一起
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
