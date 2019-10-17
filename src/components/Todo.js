import React from 'react'
import PropTypes from 'prop-types'

/**
 * 一个todo项
 */

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
    /*onClick() 当todo 项被点击时调用的回调函数。*/
  onClick: PropTypes.func.isRequired,
    /*completed:boolean todo项是否显示删除线。*/
  completed: PropTypes.bool.isRequired,
    /*text: string 显示的文本内容。*/
  text: PropTypes.string.isRequired
}

export default Todo
