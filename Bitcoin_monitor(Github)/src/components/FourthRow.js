import React, { Component } from "react";
import axios from "axios";
import Radium from "radium";

export class FourthRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CountryData: this.props.CountryData,
      selected: "AED",
      selectedCountry: "United Arab Emirates Dirham",
      lastRate: "38,733.4850",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ selected: e.target.value });
    console.log(e.target.value);
    this.state.CountryData.map((each) => {
      if (e.target.value === each.currency) {
        console.log(each.country);
        this.setState({ selectedCountry: each.country });
      }
    });
    axios
      .get(
        "https://api.coindesk.com/v1/bpi/currentprice/" +
          e.target.value +
          ".json"
      )
      .then((response) => {
        this.setState({ lastRate: Object.values(response.data.bpi)[1].rate });
        console.log(Object.values(response.data.bpi)[1].rate);
      });
  };

  render() {
    const style = {
      color: "black",
      ":hover": {
        backgroundColor: "white",
        color: "#0bd49b",
        fontWeight: "bold",
      },
    };
    return [
      <tr style={style}>
        <td>
          <select value={this.state.selected} onChange={this.onChangeHandler}>
            {this.state.CountryData.map((each) => (
              <option value={each.currency}>{each.currency}</option>
            ))}
          </select>
        </td>
        <td>{this.state.selectedCountry}</td>
        <td>{this.state.lastRate}</td>
        <td>{this.state.lastRate}</td>
      </tr>,
    ];
  }
}

export default Radium(FourthRow);
