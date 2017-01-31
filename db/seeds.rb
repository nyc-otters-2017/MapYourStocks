# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


sample_tickers = %w[nak wins cwei cc gv kem twnkw ren]
kane = User.create!(email:'kane123@map.com', password:'password')
test_port = kane.portfolios.create!(name:'lazy testing')

10.times do
  test_port.stocks.create!(ticker: sample_tickers.sample)
end

tickers = [
  "YHOO",
  "AAPL",
  "GOOG",
  "MSFT",
  "FB",
  "INTC",
  "AMZN",
  "CTSH",
  "CMCSA",
  "AAL",
  "AVGO",
  "TMUS",
  "NVDA",
  "QCOM",
  "AMAT",
  "CSCO",
  "INCY",
  "VRTX",
  "NFLX",
  "KHC",
  "PYPL",
  "TSLA"
]

'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22FB%22%2C%22INTC%22%2C%22AMZN%22%2C%22CTSH%22%2C%22CMCSA%22%2C%22AAL%22%2C%22AVGO%22%2C%22TMUS%22%2C%22NVDA%22%2C%22QCOM%22%2C%22PYPL%22%2C%22TSLA%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
