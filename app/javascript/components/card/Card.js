import classNames from 'classnames'
import React from 'react'

const Card = (props) => {
  const { children, className } = props
  const classes = classNames(
    'shadow-lg',
    'rounded-lg',
    'p-4',
    className)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card
