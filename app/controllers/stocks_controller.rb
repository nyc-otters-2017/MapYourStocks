class StocksController < ApplicationController

  def index

  end

  def show
    @ticker = params[:ticker]
    ticker_info = ApplicationHelper.get_stock_info(@ticker)
    @ticker_response =  ApplicationHelper.info_response(ticker_info)

  end


  def all
    url = 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end


end
