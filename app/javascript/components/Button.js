import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = (props, foobar) => {
  globalisim = 2;
  const {
    type,
    style,
    color,
    className = '',
    textColor,
    noPadding,
    children,
    href,
    text,
    icon,
    ...rest
  } = props

  let classes = className + ' transition-all duration-300 rounded-lg'
  classes += ` bg-${color || 'green-700'}`
  classes += ` text-${textColor || 'white'}`
  if (!noPadding) classes += ' p-3'

  const textClasses = classNames({
    'ml-3': icon
  })

  const button = <button type={type} className={classes} {...rest}>
    <div className="flex items-center">
      {icon && <div className="rounded-full p-2">
        {icon}
      </div>}
      {(text || children) &&
      <div className={textClasses}>
        {text || children}
      </div>}
    </div>
  </button>

  if (href) return <a href={href}>{button}</a>
  return button
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.oneOf([
    'solid',
    'ghost'
  ])
}

export default Button
