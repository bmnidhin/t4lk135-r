import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as SETTINGS from './constants/Settings';

export default class Promobox extends Component {
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
    const playBack ={
      url:localStorage.getItem('url'),
      cover:localStorage.getItem('cover'),
      title:localStorage.getItem('title')
    }
  return (
      <Link
        to={this.props.link}
        target={this.props.target}
      >
        <div style={this.mainContent}>
          <div style={this.inner}>
            <span
              className="text-uppercase text-muted"
              style={{ fontSize: "10px" }}
            >
              {this.props.subtitle}
            </span>
            <div className="d-flex flex-row bd-highlight justify-content-between mb-2">
              <div className="bd-highlight">
                <h3 style={{ fontSize: "19px", fontWeight: "500" }}>
                 {this.props.title}
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
