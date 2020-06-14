import React, { Component } from "react";

const HerotextEng = "A place where TKM's voice reigns free!!";
const HerotextMal = "";

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
