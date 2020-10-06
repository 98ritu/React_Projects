import React, { Component } from "react";
import TableEntries from "./TableEntries";

export class Display extends Component {
  render() {
    return this.props.rates.map((each) => (
      <TableEntries
        description={each.description}
        rate={each.rate}
        key={each.code}
        symbol={each.symbol}
      />
    ));
  }
}

export default Display;
