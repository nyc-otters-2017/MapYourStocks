class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    // debugger
    $.ajax({
      type: 'get',
      url: '/portfolios/'+ this.props.stocks[0].portfolio_id + '/all'
    }).success(function(response) {
      let stockList = response.query.results.quote
      debugger
      console.log(response)
    }.bind(this))
  }


  render() {
    return(
      <h1>Yo Stocks</h1>

    )
  }
}
