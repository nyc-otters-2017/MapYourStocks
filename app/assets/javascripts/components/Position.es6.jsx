class Position extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentWillMount() {
    // debugger
  }

  render() {
    let currentValue = (parseFloat(this.props.currentData.LastTradePriceOnly)*parseFloat(this.props.myData.shares)).toFixed(2)

    let costBasis = (parseFloat(this.props.myData.buy)*parseFloat(this.props.myData.shares)).toFixed(2)

    return(
        <tr>
          <td>{this.props.currentData.symbol}</td>
          <td>{currentValue}</td>
          <td>{(parseFloat(this.props.myData.buy)*parseFloat(this.props.myData.shares)).toFixed(2)}</td>
          <td>{(currentValue - costBasis).toFixed(2)}</td>
        </tr>
    )
  }
}
