import React, { Component } from "react";
import Radium from "radium";
class TableEntries extends Component {
  render() {
    const style = {
      color: "black",
      ":hover": {
        backgroundColor: "white",
        color: "#0bd49b",
        fontWeight: "bold",
      },
    };

    let symbol = "";
    if (this.props.symbol === "&#36;") {
      symbol = <i className="fa fa-dollar"></i>;
    }
    if (this.props.symbol === "&pound;") {
      symbol = <i className="fa fa-gbp"></i>;
    }
    if (this.props.symbol === "&euro;") {
      symbol = <i className="fa fa-euro"></i>;
    }

    return [
      <tr style={style}>
        <td>{symbol}</td>
        <td>{this.props.description}</td>
        <td>{this.props.rate}</td>
        <td>{this.props.rate}</td>
      </tr>,
    ];
  }
}
export default Radium(TableEntries);
