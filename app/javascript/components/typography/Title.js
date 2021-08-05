import React from 'react'

const Title = (props) => {
  const { children } = props
  return (
    <h2 className="font-bold text-lg">{children}</h2>
  )
}

export default Title
