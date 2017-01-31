class PortfoliosController < ApplicationController

  def new
    @portfolio = Portfolio.new(portfolio_params)
    @portfolio.user_id = current_user.id

    if @portfolio.save
      redirect_to "/"
    end
  end

  # def all
  #     url = 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'
  #     uri = URI(url)
  #     response = Net::HTTP.get(uri)
  #     render json: JSON.parse(response)
  # end
  private
  def portfolio_params
    params[:portfolio].permit(:name, :user_id)
  end
end
