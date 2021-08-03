class CommentSerializer < ApplicationSerializer
  attributes :id, :body, :post_id, :author, :replies, :created_at, :updated_at

  def replies
    ActiveModelSerializers::SerializableResource.new(object.replies,  each_serializer: CommentSerializer)
  end
end