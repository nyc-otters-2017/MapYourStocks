class Stock extends React.Component {
  constructor() {
    super()
  }


  render() {
    return(
      <li>
        <p>{this.props.symbol}</p>
        <p>{this.props.name}</p>
        <p>{this.props.change}</p>
        <p>{this.props.high}</p>
        <p>{this.props.low}</p>
      </li>
    )
  }
}
