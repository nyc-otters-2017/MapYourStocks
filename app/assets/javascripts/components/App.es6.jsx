class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      intervalId: {}
    }
  }

  componentWillMount() {
    this.callStockList()
  }

  callStockList() {
    $.ajax({
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20* from yahoo.finance.quotes where symbol in ("YHOO,AAPL,GOOG,MSFT,FB,INTC,AMZN,CTSH,CMCSA,AAL,AVGO,TMUS,NVDA,QCOM,PYPL,TSLA")&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    }).success(function(response) {
      let stockList = response.query.results.quote
      this.setState({stocks: stockList})
      console.log(this.state.stocks)
    }.bind(this))
  }

  componentDidMount() {
    let refresh = setInterval(() => {
      this.callStockList()
    }, 10000);
    this.setState({intervalId: refresh})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }



  render() {
    return(
      <StocksList
        data = {this.state.stocks}
      />
    )
  }
}
