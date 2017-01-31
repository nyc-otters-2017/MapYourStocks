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
    @userStocks = current_user.portfolios.find(:id).stocks
    url = 'https://query.yahooapis.com/v1/public/yql?q=select%20* from yahoo.finance.quotes where symbol in (' + @userStocks + ')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end

end
