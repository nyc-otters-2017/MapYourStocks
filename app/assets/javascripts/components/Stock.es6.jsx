class Stock extends React.Component {
  constructor() {
    super()
  }


  render() {
    return(
      <li>
        <p>{this.props.symbol}</p>
        <p>{this.props.name}</p>
      </li>
    )
  }
}
