import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
import * as SETTINGS from '../constants/Settings';
export default class ClubAdvt extends Component {
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
    backgroundColor: SETTINGS.COLOURS.BRAND_BG,
    minHeight: "40px",
    isbannerOn: true,
  };

  inner = {
    padding: "20px",
    color: "white",
  };
 
  render() {
  return (
      <Link
        to={"/" + this.props.link}
        target={this.props.target || "#"}
      >
        <div style={this.mainContent} className="">
          <div style={this.inner}>
            <span
              className="text-uppercase text-muted"
              style={{ fontSize: "10px" }}
            >
              {this.props.top}
            </span>
            <div className="d-flex flex-row bd-highlight justify-content-between mb-2">
              <div className="bd-highlight">
                <h3 style={{ fontSize: "14px", fontWeight: "500" }}>
                  {this.props.heading}
                </h3>
                {this.props.bottom&&(
                    <span style={{ fontSize: "10px" }} className="text-muted">
                 {this.props.bottom}
                </span>
                )}
                
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
