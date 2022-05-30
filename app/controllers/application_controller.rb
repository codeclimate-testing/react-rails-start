# frozen_string_literal: true

class ApplicationController < ActionController::Base
  after_action :set_csrf_cookie

  protected

  def set_csrf_cookie
    puts "aaa test"
    cookies['X-CSRF-Token'] = form_authenticity_token
  end
end
