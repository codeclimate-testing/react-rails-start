import React from "react"
import PropTypes from "prop-types"
import BlogPostItem from "./BlogPostItem"
import Create from "./Create"
import useSWR, { useSWRInfinite } from "swr"
import { useUser, usePosts } from "../../utils/api"
import Button from "../Button"
import Card from "../card/Card"
import CardBody from "../card/CardBody"

const Index = (props) => {
  const { data: user } = useUser()
  const { posts, error, isLoadingMore, size, setSize, isReachingEnd } = usePosts()
  if(error) return <div>Error!</div>
  if(!posts) return <div>Cargando...</div>
  return (
    <div>
      {user && <Create />}
      {posts && posts.map(post => {
        return (
        <BlogPostItem
          key={post.id}
          title={post.title}
          createdAt={post.created_at}
          author={`${post.author.name} ${post.author.last_name}`}
          postId={post.id}
        />
      )})}
      <Card>
        <CardBody>
          <div onClick={() => isLoadingMore || isReachingEnd ? false : setSize(size + 1)}>
            {isLoadingMore
            ? "Cargando..."
            : isReachingEnd
            ? "No hay más posts"
            : "Cargar más posts"}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Index
