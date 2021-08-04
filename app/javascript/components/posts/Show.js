import React from 'react'
import PropTypes from 'prop-types'
import Comments from './comments/Comments'
import Title from '../typography/Title'
import Subtitle from '../typography/Subtitle'
import Paragraph from '../typography/Paragraph'
import Create from './Create'
import useSWR, { mutate } from 'swr'
import Card from '../card/Card'
import CardTitle from '../card/CardTitle'
import CardBody from '../card/CardBody'

const Show = (props) => {
  const { id } = props.match.params
  const { data: post, error } = useSWR(`/api/posts/${id}`)
  if (error) return <div>Error!</div>
  if (!post) return <div>Cargando...</div>
  return (
    <div>
      <Card>
        <CardTitle>
          <Title>{post.title}</Title>
        </CardTitle>
        <Paragraph>{post.body}</Paragraph>
      </Card>
      <div className="mt-4">
        <Title>Comentarios</Title>
        <Comments postId={id} />
      </div>
    </div>
  )
}

export default Show
