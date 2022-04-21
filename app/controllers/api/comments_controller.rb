# frozen_string_literal: true

module Api
  class CommentsController < ApplicationController
    before_action :set_comment, only: %i[show update destroy]
    before_action :set_post, only: %i[index create]

    def index
      return render json: Comment.all unless params[:post_id].present?

      render json: Comment.where(post: @post, parent: nil)
    end

    def show
      render json: @comment
    end

    def create
      @comment = Comment.new(comment_params)
      @comment.author = current_user
      @comment.post = @post

      return render json: @comment, status: :created if @comment.save

      render comment_errors
    end

    def update
      return render incorrect_user_error if current_user != @comment.author
      return render json: @comment if @comment.update(comment_params)

      render comment_errors
    end

    def destroy
      @comment.destroy
    end

    private

    def incorrect_user_error
      { json: { errors: 'Usuario se' }, status: :unauthorized }
    end

    def comment_errors
      {
        json: {
          errors: {
            comment: @comment.errors.to_hash(full_messages = true)
          }
        },
        status: :unprocessable_entity
      }
    end

    def set_comment
      @comment = Comment.find(params.require(:id))
    end

    def set_post
      @post = Post.find(params.require(:post_id))
    end

    def comment_params
      params.require(:comment).permit(%i[body parent_id])
    end
  end
end
