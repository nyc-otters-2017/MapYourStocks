class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
    }
  }

  componentWillMount() {
    $.ajax({
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    }).success(function(response) {
      let stockList = response.query.results.quote
      debugger
      this.setState({stocks: stockList})
      console.log(this.state.stocks)
    }.bind(this))
  }



  render() {
    return(
      <section>
        <h1>Hello App!</h1>
        <ul>
        {
          this.state.stocks.map((element, i) => {
            return (
              <Stock key={i}
                     symbol={element.symbol}
                     name={element.Name}
              />
            )
          })
        }
        </ul>
      </section>
    )
  }
}
