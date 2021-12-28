import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PromoBanner extends Component {
  render() {
    return (
      <div>
      {false && <div className="pt-3 pb-3">
                <a href ={'https://play.google.com/store/apps/details?id=com.revolt.onlive'} target="_blank">
                <img src="https://thetkmshow.github.io/static/poster/rovlt.png" className="border border-warning roundedImage" width="100%"/>
                </a>
            </div>}
      </div>
    );
  }
}
