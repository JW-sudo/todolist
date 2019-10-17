import React from 'react'
import PropTypes from 'prop-types'

//Link带有 callback 回调功能的链接


const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}//onClick() 当点击链接时会触发
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
