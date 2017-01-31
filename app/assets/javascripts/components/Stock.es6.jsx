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
        <table >
          <tr>
            <td> Change </td>
            <td> High </td>
            <td> Low </td>
            <td> Current </td>
          </tr>
          <tr>
            <td> {this.props.change} </td>
            <td> {this.props.high} </td>
            <td> {this.props.low} </td>
            <td> {this.props.current} </td>
          </tr>
        </table>
        <span><a href={showStock}>add</a></span>
      </li>
    )
  }
}
