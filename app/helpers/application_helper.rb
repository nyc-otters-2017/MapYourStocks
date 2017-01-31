module ApplicationHelper
  def self.get_stock_info(ticker)
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22"+ ticker + "%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
    # uri = URI(url)
    response = JSON.parse( Net::HTTP.get(URI(url)) )

  end

  def self.info_response(info)
    info['query']['results']['quote']
  end


end
