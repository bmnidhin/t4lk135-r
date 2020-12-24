import React, { Component } from "react";
import * as SETTINGS from '../constants/Settings';

export default class HeroText extends Component {
  constructor(props) {
    super(props);

    this.textStyle = {  
      color: "white",
      paddingLeft: "40px",
      paddingRight: "40px",
    };
  }

  render() {
    return (
      <div className="pt-3 pb-3">
        <h1 style={this.textStyle} className="Herotext">
          {" "} 
          {SETTINGS.heroText}
        </h1>
      </div>
    );
  }
}
