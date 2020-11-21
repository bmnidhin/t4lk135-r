import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";

export default class ListenAfterLive extends Component {
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
    backgroundColor: "rgb(14, 14, 67)",
    minHeight: "50px",
    isbannerOn: true,
  };

  inner = {
    padding: "20px",
    color: "white",
  };
  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/notifications")
      .then((response) => {
        this.setState({
          isbannerOn: response.data.map((event) => event.isbannerOn),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://api.thetkmshow.in/listen")
      .then((response) => {
        this.setState({
          title: response.data[0].title,
          slug: response.data[0].slug,
          date: response.data[0].publishedAtDate,
          time: response.data[0].publishedAtTime,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const currentTime = Moment().format();
    const publishAt = this.state.date + "T" + this.state.time + "+05:30";

    const a = Moment(publishAt);
    const b = Moment(currentTime);
    const myDiff = b.diff(a);

    const isBannerActive = myDiff > 0 && myDiff < 259200000; //displaybanner for 3*24 hr
    const timeAgo = Moment(publishAt).fromNow();

    return (
      <Link
        to={"/listen/" + this.state.slug}
        className={true ? "" : "d-none"}
      >
        <div style={this.mainContent}>
          <div style={this.inner}>
            <span
              className="text-uppercase text-muted"
              style={{ fontSize: "10px" }}
            >
              listen again
            </span>
            <div className="d-flex flex-row bd-highlight justify-content-between mb-2">
              <div className="bd-highlight">
                <h3 style={{ fontSize: "19px", fontWeight: "500" }}>
                  {this.state.title}
                </h3>
                <span style={{ fontSize: "10px" }} className="text-muted">
                  Streamed {timeAgo}
                </span>
              </div>
              <div
                style={{ height: "100%", display: "inline" }}
                className="bd-highlight align-middle"
              >
                <span className="material-icons " style={{ fontSize: "38px" }}>
                  play_circle_outline
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
