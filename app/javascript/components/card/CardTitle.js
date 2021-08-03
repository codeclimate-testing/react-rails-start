import React from "react"

const CardTitle = (props) => {
  const { children } = props
  return (
    <div className="flex justify-between">
      {children}
    </div>
  )
}

export default CardTitle