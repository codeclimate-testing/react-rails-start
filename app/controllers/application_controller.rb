# frozen_string_literal: true

class ApplicationController < ActionController::Base
  after_action :set_csrf_cookie

  protected

  def set_csrf_cookie
    cookies['X-CSRF-Token'] = form_authenticity_token
    puts "test"
  end
end
