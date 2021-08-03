module Api
  class UserSessionsController < ApplicationController
    def create
      puts "LOGIN"
      puts "email: #{params[:email]}"
      puts "password: #{params[:password]}"
      @user = login(params[:email], params[:password])

      return render json: @user, status: :created if @user
      render json: { error: 'Login failed' }, status: :unprocessable_entity
    end

    def show
      render json: current_user, status: :ok
    end

    def destroy
      logout
      render json: { message: 'Logged out' }, status: :ok
    end
  end
end