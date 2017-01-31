class StocksController < ApplicationController

  def index

  end

  def show
    @ticker = params[:ticker]
    ticker_info = ApplicationHelper.get_stock_info(@ticker)
    @ticker_response =  ApplicationHelper.info_response(ticker_info)
  end

  def create

    @stock = current_user.stocks.new(stock_params)
    if @stock.save
      redirect_to '/'
    else
      @ticker = params[:stock][:ticker]
      ticker_info = ApplicationHelper.get_stock_info(@ticker)
      @ticker_response = ApplicationHelper.info_response(ticker_info)
      @errors = @stock.errors.full_messages
      render "stocks/show"
    end
  end

  def all
    url = 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end

  private
  def stock_params
    shares = {"shares" => params[:quantity]}
    params[:stock].permit(:ticker, :buy, :portfolio).merge(shares)

  end


end
