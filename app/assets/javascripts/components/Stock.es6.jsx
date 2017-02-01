class Stock extends React.Component {
  constructor() {
    super()
  }

  render() {
    let showStock='stocks/'+ this.props.symbol

    return(

        <div className='stock'>

          <a href={showStock}><h3 className='symbol'>{this.props.symbol}</h3></a>
          <span><h3 className='symbol'>{this.props.name}</h3></span>
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
        </div>

    )
  }
}
