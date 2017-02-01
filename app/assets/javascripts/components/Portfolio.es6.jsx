class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateStocks: [],
      myStocks: this.props.stocks
    }
  }

  componentWillMount() {
    $.ajax({
      type: 'get',
      url: '/portfolios/'+ this.state.myStocks[0].portfolio_id + '/all'
    }).success(function(response) {
      let stockList = response.query.results.quote
      this.setState({updateStocks: [...stockList, ...this.state.updateStocks]})
      // debugger
    }.bind(this))
  }


  render() {
    return(
        <tbody className="tables">
          <tr>
            <th className="pl">Ticker</th>
            <th className="pl">Current Value</th>
            <th className="pl">Cost Basis</th>
            <th className="pl">Total PL</th>
          </tr>
        {
          this.state.updateStocks.map((element) => {
            for(let i=0; i<this.state.myStocks.length; i++) {
              if(element.symbol == this.state.myStocks[i].ticker) {
                return( <Position
                          key={i}
                          myData={this.state.myStocks[i]}
                          currentData={element}
                        />
              )
              }
            }
          })
        }
        </tbody>
    )
  }
}
