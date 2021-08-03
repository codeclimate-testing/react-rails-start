import React from "react"
import PropTypes from "prop-types"
import Card from "../card/Card"
import CardTitle from "../card/CardTitle"
import Title from "../typography/Title"
import Subtitle from "../typography/Subtitle"
import SmallText from "../typography/SmallText"
import { Link } from "react-router-dom"

class BlogPostItem extends React.Component {
  render () {
    return (
      <Card>
        <CardTitle>
          <div>
            <Link to={`/post/${this.props.postId}`}>
              <Title>{this.props.title}</Title>
            </Link>
            <SmallText>{this.props.createdAt}</SmallText>
          </div>
          <div className="self-center">
            <Subtitle>{this.props.author}</Subtitle>
          </div>
        </CardTitle>
      </Card>
    );
  }
}

BlogPostItem.propTypes = {
  postId: PropTypes.number,
  title: PropTypes.string,
  createdAt: PropTypes.node,
  author: PropTypes.string
};

export default BlogPostItem
