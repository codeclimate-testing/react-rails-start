import React from 'react'
import { Link } from 'react-router-dom'

const NavButton = (props) => {
  const { key, href, children, ...rest } = props
  const classes = 'p-3 hover:bg-green-900 transition-colors duration-300 rounded-lg'
  return href
    ? (
    <Link to={href} {...rest}><div className={classes}>{children}</div></Link>
      )
    : (
    <div {...rest} className={classes}>{children}</div>
      )
}

export default NavButton
