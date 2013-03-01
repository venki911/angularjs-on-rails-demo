class SessionsController < ApplicationController
  before_filter :ensure_not_joined, only: :create

  respond_to :json

  @@nicknames = []

  def index
    respond_with @@nicknames.sort.map { |n| { nick: n } }
  end

  def create
    success = params[:nick].present? && !@@nicknames.include?(params[:nick])

    if success
      session[:nick] = params[:nick]
      @@nicknames << params[:nick]
      Channel.find("main").join(params[:nick])
    end

    respond_to do |format|
      format.json { render json: { success: success }, status: 200 }
    end
  end

  private
  def ensure_not_joined
    session[:nick].blank?
  end
end
