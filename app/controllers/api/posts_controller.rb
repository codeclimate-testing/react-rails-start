# frozen_string_literal: true

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

      render post_errors
    end

    def update
      return render json: @post if @post.update(post_params)

      render post_errors
    end

    def destroy
      @post.destroy
    end

    private

    def post_errors
      {
        json: {
          errors: {
            post: @post.errors.to_hash(full_messages = true)
          }
        },
        status: :unprocessable_entity
      }
    end

    def set_post
      @post = Post.find(params.require(:id))
    end

    def post_params
      params.require(:post).permit(%i[title body])
    end
  end
end
