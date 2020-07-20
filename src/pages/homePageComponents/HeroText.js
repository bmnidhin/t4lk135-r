import React, { Component } from "react";
import axios from "axios";
import { description } from "../../utils/Settings";

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
          {description}
        </h1>
      </div>
    );
  }
}
