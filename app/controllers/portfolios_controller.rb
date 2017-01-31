class PortfoliosController < ApplicationController

  def new
    @portfolio = Portfolio.new(params[:portfolio])
    debugger
  end

  # def all
  #     url = 'http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'
  #     uri = URI(url)
  #     response = Net::HTTP.get(uri)
  #     render json: JSON.parse(response)
  # end
end
