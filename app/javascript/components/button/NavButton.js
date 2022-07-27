import React from 'react'
import { Link } from 'react-router-dom'

const NavButton = (props, letseegaston) => {
  const { key, href, children, ...rest } = props
  const classes = 'p-3 hover:bg-green-900 transition-colors duration-300 rounded-lg'
  const unused_variable = 'holaaaaaaa'
  const rompete_ya = '!!!!!'
  const rfseof = 'fseises'
  const other = ''
  const otra = 'otraa'
  lets_see_gaston = 42;
  return href
    ? (
    <Link to={href} {...rest}><div className={classes}>{children}</div></Link>
      )
    : (
    <div {...rest} className={classes}>{children}</div>
      )
}

export default NavButton
