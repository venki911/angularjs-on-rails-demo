class ChannelsController < ApplicationController
  respond_to :json
  
  def show
    respond_with(Channel.find(params[:id]))
  end

  def update
    channel = Channel.find(params[:id])
    channel.add_message(session[:nick], params[:message])
    respond_with(channel)
  end
end
