import React, { Component } from "react";
import "../App.css";
import Feature from "../Feature/Feature";

class FeaturesList extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;

      return (
        <Feature
          id={featureHash}
          featureArr={this.props.features[feature]}
          selectedFeatures={this.props.selectedFeatures}
          updateFeature={this.props.updateFeature}
          featureName={feature}
          key={featureHash}
        />
      );
    });
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default FeaturesList;
