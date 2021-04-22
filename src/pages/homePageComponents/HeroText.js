import React, { Component } from "react";
import * as SETTINGS from '../constants/Settings';
// import randomQuotes from 'random-quotes';

export default class HeroText extends Component {
  constructor(props) {
    super(props);
    this.state ={
      // quote:randomQuotes()
    }
    this.textStyle = {  
      color: "white",
      paddingLeft: "40px",
      paddingRight: "40px",
    };
  }

  render() {
    return (
      <div className="pt-5 pb-4">
        <h1 style={this.textStyle} className="Herotext">
          {/* {this.state.quote.body} */}
          {SETTINGS.heroText}
        </h1>
        {/* <span className="text-muted">{this.state.quote.author}</span> */}
      </div>
    );
  }
}
