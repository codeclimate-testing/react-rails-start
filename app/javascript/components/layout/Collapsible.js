import React from 'react'
import Button from '../Button'
import Card from '../card/Card'
import CardTitle from '../card/CardTitle'

const Collapsible = (props) => {
  const { open, toggleOpen, title, children } = props

  const handleClick = (e) => {
    toggleOpen(false)
  }

  return open
    ? (
    <Card>
    { toggleOpen !== undefined && (<CardTitle>
      <div>{title && <Title>{title}</Title>}</div>
      <div onClick={handleClick}>
        <Button color="transparent" textColor="gray-500">X</Button>
      </div>
    </CardTitle>)}
      {children}
    </Card>
      )
    : null
}

export default Collapsible
