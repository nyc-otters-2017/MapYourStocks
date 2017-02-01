class StocksController < ApplicationController

  def index

  end

  def show
    @ticker = params[:ticker]
    ticker_info = ApplicationHelper.get_stock_info(@ticker)
    @ticker_response =  ApplicationHelper.info_response(ticker_info)
  end

  def create

    @portfolio = Portfolio.find_by(id: params[:stock][:portfolio_id])
    @ticker = params[:stock][:ticker]
    if @portfolio
      @stock = @portfolio.stocks.new(stock_params)

      if @stock.save
        redirect_to '/'
      else
        ticker_info = ApplicationHelper.get_stock_info(@ticker)
        @ticker_response = ApplicationHelper.info_response(ticker_info)
        @errors = @stock.errors.full_messages
        render "stocks/#{@ticker}"
      end
    else
      @errors = "Cannot find portfolio"
      render "show"
    end
  end

  # def all
  #   url = 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'
  #   uri = URI(url)
  #   response = Net::HTTP.get(uri)
  #   render json: JSON.parse(response)
  # end

  private
  def stock_params
    shares = {"shares" => params[:quantity]}

    params[:stock].permit(:ticker, :buy, :portfolio).merge(shares)
  end


end
