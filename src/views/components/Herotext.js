import React, { Component } from "react";

const settings = require("../API/settings.json");

let HerotextEng = settings.map((settings) => {
  return settings.HerotextEng;
});
let HerotextMal = settings.map((settings) => {
  return settings.HerotextMal;
});


class Herotext extends Component {
  render() {
    return (
      <div className="heading">
        <h1 className="Herotext">{HerotextEng}</h1>
        <h3 className="Herotext-ml">{HerotextMal}</h3>
        {/* Herotext-ml */}
      </div>
    );
  }
}

export default Herotext;
