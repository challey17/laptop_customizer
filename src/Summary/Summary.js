import React, { Component } from "react";
import "../App.css";

class Summary extends Component {
  render() {
    const summary = Object.keys(this.props.selectedFeatures).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.selectedFeatures[feature];

        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      }
    );
    return (
      <div>
        <h2>Your cart</h2>
        {summary}
      </div>
    );
  }
}

export default Summary;
