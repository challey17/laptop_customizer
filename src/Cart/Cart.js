import React, { Component } from "react";
import Total from "../Total/Total";
import Summary from "../Summary/Summary";
import "../App.css";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <Summary
          USCurrencyFormat={USCurrencyFormat}
          selectedFeatures={this.props.selectedFeatures}
        />
        <Total
          selectedFeatures={this.props.selectedFeatures}
          USCurrencyFormat={USCurrencyFormat}
        />
      </section>
    );
  }
}

export default Cart;
