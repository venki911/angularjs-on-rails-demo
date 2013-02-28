class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :intercept_html_requests

  layout nil

  private
  def intercept_html_requests
    Rails.logger.debug("\n\nsession is: #{session.inspect} \n\n")
    render('layouts/angular') if request.format == Mime::HTML
  end
end
