import React from 'react'

const CardBody = (props) => {
  const { children } = props
  return (
    <div className="flex justify-between">
      {children}
    </div>
  )
}

export default CardBody
