import React from 'react'

const SmallText = (props) => {
  const { children } = props
  return (
    <h4 className="text-xs text-gray-400">{children}</h4>
  )
}

export default SmallText
