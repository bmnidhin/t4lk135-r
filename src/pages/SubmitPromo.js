import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as SETTINGS from './constants/Settings';

export default class SubmitPromo extends Component {
  state = {
    title: "",
    slug: "",
    date: "",
    time: "",
  };
  mainContent = {
    textAlign: "left",
    textDecoration: "none",
    borderRadius: "5px",
    backgroundColor: SETTINGS.COLOURS.CARD_GRADIENT,
    minHeight: "50px",
    isbannerOn: true,
  };

  inner = {
    padding: "20px",
    color: "white",
  };
 
  render() {
  return (
      <Link
        to={"/submit"}
        target="_blank"
      >
        <div style={this.mainContent}>
          <div style={this.inner}>
            <span
              className="text-uppercase text-muted"
              style={{ fontSize: "10px" }}
            >
              playlist of TKM
            </span>
            <div className="d-flex flex-row bd-highlight justify-content-between mb-2">
              <div className="bd-highlight">
                <h3 style={{ fontSize: "19px", fontWeight: "500" }}>
                  Submit your entry! 🎙️ 🎶
                </h3>
                <span style={{ fontSize: "10px" }} className="text-muted">
                 
                </span>
              </div>
              <div
                style={{ height: "100%", display: "inline" }}
                className="bd-highlight align-middle"
              >
                <span className="material-icons " style={{ fontSize: "28px" }}>
                arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
