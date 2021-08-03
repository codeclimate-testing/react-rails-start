# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users
  root to: 'home#index'
  namespace :api do
    resources :posts do
      resources :comments, only: %i[index create]
    end
    resources :authors
    resources :users
    resources :comments
    post 'login' => 'user_sessions#create', as: :login
    post 'logout' => 'user_sessions#destroy', as: :logout
    get 'session' => 'user_sessions#show', as: :session
  end
  get '(/*path)', to: 'home#index'
end
