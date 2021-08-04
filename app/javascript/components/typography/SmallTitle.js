import React from 'react'

const SmallTitle = (props) => {
  const { children } = props
  return (
    <h2 className="font-bold text-base">{children}</h2>
  )
}

export default SmallTitle
