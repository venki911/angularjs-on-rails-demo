class SessionsController < ApplicationController
  before_filter :ensure_not_joined

  def create
    success = params[:nick].present?
    session[:nick] = params[:nick]

    respond_to do |format|
      format.json { render json: { success: success }, status: 200 }
    end
  end

  private
  def ensure_not_joined
    session[:nick].blank?
  end
end
