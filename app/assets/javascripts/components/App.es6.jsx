class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
    }
  }

  componentWillMount() {
    // let url =       "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22"+ {ticker_tag} + "%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

    $.ajax({
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22FB%22%2C%22INTC%22%2C%22AMZN%22%2C%22CTSH%22%2C%22CMCSA%22%2C%22AAL%22%2C%22AVGO%22%2C%22TMUS%22%2C%22NVDA%22%2C%22QCOM%22%2C%22PYPL%22%2C%22TSLA%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='

    }).success(function(response) {
      let stockList = response.query.results.quote

      this.setState({stocks: stockList})
      console.log(this.state.stocks)
    }.bind(this))
  }


  render() {
    return(
      <StocksList
        data = {this.state.stocks}
      />
    )
  }
}
