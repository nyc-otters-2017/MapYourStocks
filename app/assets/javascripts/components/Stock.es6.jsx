class Stock extends React.Component {
  constructor() {
    super()
  }


  render() {
    let showStock='stocks/'+ this.props.symbol
    return(
      <li>
        <h2>{this.props.symbol}</h2>
        <span><h3>{this.props.name}</h3></span>
        <span>{this.props.change} | </span>
        <span>{this.props.high} | </span>
        <span>{this.props.low} | </span>
        <span>${this.props.current} | </span>
        <span><a href={showStock}>add</a></span>
      </li>
    )
  }
}
