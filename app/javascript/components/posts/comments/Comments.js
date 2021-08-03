import React from "react"
import PropTypes from "prop-types"
import CommentItem from "./CommentItem"
import Create from "./Create"
import useSWR, { mutate } from "swr"
import { useUser } from "../../../utils/api"

const Comments = (props) => {
  const { postId } = props
  const apiPath = `/api/posts/${postId}/comments`
  const { data: comments, error } = useSWR(apiPath)
  const { data: user } = useUser()
  if(error) return <div>Error!</div>
  if(!comments) return <div>Cargando...</div>
  return (
    <div>
      {comments.map((comment, i) => (
          <CommentItem
            key={i}
            createdAt={comment.created_at}
            author={`${comment.author.name} ${comment.author.last_name}`}
            body={comment.body}
            commentId={comment.id}
            postId={comment.post_id}
            replies={comment.replies}
          />
        ))}
        {user && <Create postId={postId} />}
    </div>
  );
}

export default Comments