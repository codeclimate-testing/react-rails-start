import React from 'react'

const Subtitle = (props) => {
  const { children } = props
  return (
    <h4 className="text-sm text-gray-400">{children}</h4>
  )
}

export default Subtitle
