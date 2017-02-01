class StocksList extends React.Component {
  constructor() {
    super()
    this.state = {
      stocks: []
    }
  }


  render() {
    return(
      <section>
        <ul>
        {
          this.props.data.map((element, i) => {
            return (
              <Stock key={i}
                     symbol={element.symbol}
                     name={element.Name}
                     change={element.Change}
                     high={element.DaysHigh}
                     low={element.DaysLow}
                     current={element.LastTradePriceOnly}
              />
            )
          })
        }
        </ul>
      </section>
    )
  }
}
