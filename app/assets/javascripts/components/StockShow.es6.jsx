class StockShow extends React.Component {
  constructor() {
    super();
    this.state = {
      stockInfo: []
    }
  }

  componentWillMount() {
    var tickerUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20* from yahoo.finance.quotes where symbol in (\""+this.props.ticker+"\")&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

    $.ajax({
      type: 'get',
      url: tickerUrl
    }).success(function(response) {
      this.setState({stockInfo: response.query.results.quote});
    }.bind(this))

  }
  render() {
    return(
      <StockShowFullInfo
        data = {this.state.stockInfo}
        user = {this.props.user}
        keyToken = {this.props.keyToken}
      />

    )
  }

}
