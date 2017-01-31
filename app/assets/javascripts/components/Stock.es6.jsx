class Stock extends React.Component {
  constructor() {
    super()
  }


  render() {
    return(
      <li>
        <h2>{this.props.symbol}</h2>
        <h3>{this.props.name}</h3>
        <span>{this.props.change} | </span>
        <span>{this.props.high} | </span>
        <span>{this.props.low} | </span>
        <span>${this.props.current}</span>
        <span>{link_to "add", stocks}</span>

      </li>
    )
  }
}
