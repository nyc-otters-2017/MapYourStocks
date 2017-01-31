class UsersController < ApplicationController
  before_action :authenticate_user!, except: [:show]

  def show
    @user = User.find(params[:id])
  end

  def portfolios
    @user = current_user
    if @current_user
    end
  end

  def all
    debugger
    @userStocks = current_user.portfolios.find(:id).stocks
    url = ''
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end
end
