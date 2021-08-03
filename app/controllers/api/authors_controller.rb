# frozen_string_literal: true

module Api
  class AuthorsController < ApplicationController
    before_action :set_author, only: %i[show update destroy]
    def index
      render json: Author.all
    end

    def show
      render json: @author
    end

    def create
      @author = Author.new(author_params[:author])

      return render json: @author, status: :created if @author.save

      render json: { errors: @author.errors }, status: :unprocessable_entity
    end

    def update
      return render json: @author if @author.update(author_params[:author])

      render json: { errors: @author.errors }, status: :unprocessable_entity
    end

    def destroy
      @author.destroy
    end

    private

    def set_author
      @author = Author.find(params.require(:id))
    end

    def author_params
      params.require(:author).permit(%i[name last_name avatar])
    end
  end
end
