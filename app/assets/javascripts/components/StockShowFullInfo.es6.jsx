class StockShowFullInfo extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
    <div>

      <div className="" >
        <ul>
          <h3> Ticker: {this.props.data.symbol} </h3>
            <li>Name: {this.props.data.Name} </li>
            <li>Ask: {this.props.data.Ask} </li>
            <li>Open: {this.props.data.Open}</li>
            <li>Days Range: {this.props.data.DaysRange}</li>
            <li>Year Range: {this.props.data.YearRange}</li>
            <li>Previous Close: {this.props.data.PreviousClose} </li>
            <li>Percent Change: {this.props.data.PercentChange}</li>
            <li>Last Trade Date: {this.props.data.LastTradeDate} </li>
            <li>Last Trade PriceOnly: {this.props.data.LastTradePriceOnly}</li>
            <li>Last Trade Time: {this.props.data.LastTradeTime}</li>
            <li>Change: {this.props.data.Change}</li>
            <li>Change in Percent: {this.props.data.ChangeinPercent}</li>
            <li>Volume: {this.props.data.Volume} </li>
            <li>Average Daily Volume: {this.props.data.AverageDailyVolume}</li>
            <li>PEG Ratio: {this.props.data.PEGRatio}</li>
          </ul>
      </div>

      {/* <div class="" style="margin: auto; width: 50%; text-align: center;"/>
          <h3>buy this stock</h3>
          <form id='myform' method='POST' action='/stocks'>
              <input name="authenticity_token" value="{ form_authenticity_token }" type="hidden"/>
              <input type='button' value='-' class='qtyminus' field='quantity'/>
              <input type='text' name='quantity' value='0' class='qty'/>
              <input type='button' value='+' class='qtyplus' field='quantity'/>

              <select name="stock[portfolio_id]">
                  <option value="" disabled selected>Choose your option</option>
                  { current_user.portfolios.each do |portfolio|  }
                  <option value="{= portfolio.id}">
                      {portfolio.name}
                  </option>
                  { end }
              </select>
              <input type="hidden" name="stock[ticker]" value="{=@ticker}"/>
              <input type="hidden" name="stock[buy]" value="{= @ticker_response['LastTradePriceOnly'] }"/>
              <input type="submit" name="" value="Buy"/>
          </form>
      </div> */}

    </div>
    )
  }

}
