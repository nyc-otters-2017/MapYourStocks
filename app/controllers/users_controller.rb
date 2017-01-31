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
    @userStocks = current_user.
    url = 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end
end
