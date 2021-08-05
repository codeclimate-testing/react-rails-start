import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../card/Card'
import CardTitle from '../../card/CardTitle'
import Title from '../../typography/Title'
import Subtitle from '../../typography/Subtitle'
import SmallTitle from '../../typography/SmallTitle'
import SmallText from '../../typography/SmallText'
import { Link } from 'react-router-dom'
import CardBody from '../../card/CardBody'
import Button from '../../Button'
import Create from './Create'
import Collapsible from '../../layout/Collapsible'
import { IoChatbubblesOutline } from 'react-icons/io5'

const CommentItem = (props) => {
  const { body, author, createdAt, replies, commentId, postId } = props
  const [replyOpen, setReplyOpen] = React.useState(false)
  const toggleReply = (e) => {
    setReplyOpen(!replyOpen)
  }
  return (
    <Card className="mt-4">
      <CardTitle>
        <div>
          <SmallTitle>{author}</SmallTitle>
          <SmallText>{createdAt}</SmallText>
        </div>
      </CardTitle>
      <CardBody>
        {body}
      </CardBody>
      <div className="mt-2">
        <Button color="transparent" textColor="green-700" noPadding onClick={toggleReply} icon={<IoChatbubblesOutline />}>{replies.length !== 0 && replies.length}</Button>
      </div>
      {replyOpen && <div>
        <Create postId={postId} commentId={commentId} onSuccess={toggleReply} />
      </div>}
      {replies && (replies.map((reply) => {
        return (
          <CommentItem
            key={reply.id}
            createdAt={reply.created_at}
            author={`${reply.author.name} ${reply.author.last_name}`}
            body={reply.body}
            commentId={reply.id}
            postId={postId}
            replies={reply.replies}
          />
        )
      }))}
    </Card>
  )
}

CommentItem.propTypes = {
  commentId: PropTypes.number,
  postId: PropTypes.number,
  createdAt: PropTypes.node,
  author: PropTypes.string,
  body: PropTypes.string,
  replies: PropTypes.arrayOf(PropTypes.object)
}

export default CommentItem
