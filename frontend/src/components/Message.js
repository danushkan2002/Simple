import React from 'react'

const Message = ({children, color}) => {
  return (
    <div className={`text-${color}-500 text-xs`}>{children}</div>
  )
}

export default Message