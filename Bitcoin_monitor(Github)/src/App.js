import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import axios from "axios";
import FourthRow from "./components/FourthRow";
import CountryData from "./components/CountryData";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: [],
    };
    this.onRefreshHandler = this.onRefreshHandler.bind(this);
  }

  onRefreshHandler = () => {
    // if (this.state.rates.length === 0) {
    //  this.setState({ rates: [0, 0, 0] });
    //  console.log(this.state.rates);
    // } else {
    //  const updated = this.state.rates.map((each) => {
    // return {
    // ...each,
    // prev: each.rate,
    // };
    // });
    // this.setState({ rates: updated });
    // }

    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        const rates = Object.values(response.data.bpi);
        console.log(this.state.rates);
        this.setState({ rates: rates });
      });
  };

  componentDidMount() {
    this.onRefreshHandler();
  }
  render() {
    const style = {
      backgroundColor: "#0bd49b",
      color: "white",
    };
    return (
      <div>
        <Header />
        <div>
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="table-responsive-sm">
                <table className="table mt-5 p-5">
                  <thead style={style} className="p-5">
                    <tr>
                      <th>Code</th>
                      <th>Description</th>
                      <th>Before</th>
                      <th>Current Rate</th>
                    </tr>
                  </thead>
                  <tbody className="bg-light">
                    <Display rates={this.state.rates} />
                    <CountryData />
                  </tbody>
                </table>
              </div>

              <input
                type="submit"
                value="Refresh"
                className="btn"
                style={style}
                onClick={this.onRefreshHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
