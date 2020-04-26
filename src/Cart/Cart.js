import React, { Component } from "react";
import Total from "../Total/Total";
import "../App.css";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class Cart extends Component {
  render() {
    // Cart Component

    const summary = Object.keys(this.props.selectedFeatures).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.selectedFeatures[feature];

        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      }
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total
          selectedFeatures={this.props.selectedFeatures}
          USCurrencyFormat={USCurrencyFormat}
        />
      </section>
    );
  }
}

export default Cart;
