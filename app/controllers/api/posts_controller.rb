module Api
  class PostsController < ApplicationController
    before_action :set_post, only: %i[show update destroy]
    def index
      render json: Post.joins(:author).order(created_at: 'desc').page(params[:page])
    end

    def show
      render json: @post
    end

    def create
      @post = Post.new(post_params)
      @post.author = current_user
      
      return render json: @post, status: :created if @post.save

      render json: { errors: { post: @post.errors.to_hash(full_messages = true) } }, status: :unprocessable_entity
    end

    def update
      return render json: @post if @post.update(post_params)
      
      render json: { errors: { post: @post.errors.to_hash(full_messages = true) } }, status: :unprocessable_entity
    end

    def destroy
      @post.destroy
    end

    private

    def set_post
      @post = Post.find(params.require(:id))
    end

    def post_params
      params.require(:post).permit(%i[title body])
    end
  end
end