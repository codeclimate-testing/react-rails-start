class PostSerializer < ApplicationSerializer
  attributes :id, :title, :body, :author, :created_at, :updated_at

  def author
    ActiveModelSerializers::SerializableResource.new(object.author,  each_serializer: AuthorSerializer)
  end
end