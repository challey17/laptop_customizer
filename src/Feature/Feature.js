import React, { Component } from "react";
import "../App.css";
import slugify from "slugify";
import FeatureOption from "../FeatureOption/FeatureOption";

class Feature extends Component {
  render() {
    //   Map over options, call FeatureOption passing key, state and callback props

    const options = this.props.featureArr.map((item, idx) => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <FeatureOption
          id={itemHash}
          featureOption={this.props.featureArr[idx]}
          selectedFeatures={this.props.selectedFeatures}
          updateFeature={this.props.updateFeature}
          key={itemHash}
          featureName={this.props.featureName}
        />
      );
    });

    return (
      <fieldset className="feature" key={this.props.id}>
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Feature;
