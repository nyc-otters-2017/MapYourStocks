module StockHelper
  def current_value(shares, current_price)
    shares * current_price
  end

  def cost_basis(shares, buy_price)
    shares * buy_price
  end
end
