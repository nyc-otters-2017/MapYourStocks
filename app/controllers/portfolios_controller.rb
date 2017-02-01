class PortfoliosController < ApplicationController

  def new
    @portfolio = Portfolio.new(portfolio_params)
    @portfolio.user_id = current_user.id

    if @portfolio.save
      redirect_to "/"
    end
  end

  def all
    @portfolio = Portfolio.find_by(id: params[:id])
    @userStocks = @portfolio.stocks.map { |stock| stock.ticker }
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20* from yahoo.finance.quotes where symbol in (\"#{@userStocks.join(',')}\")&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
    uri = URI(url)
    response = Net::HTTP.get(uri)
    render json: JSON.parse(response)
  end
  
  private
  def portfolio_params
    params[:portfolio].permit(:name, :user_id)
  end
end
