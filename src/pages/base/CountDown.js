import React, { Component } from "react";
import Countdown from "react-countdown";
import axios from "axios";

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.state = {
      isActive: false,
      upComingEventName: "test event",
      eventDate: "22",
      eventMonth: "12",
      eventYear: "2022",
      hour: "19",
      minutes: "00",
    };

    this.divStyle = {
      width: "100%",
      height: "45px",
      color: "white",
      backgroundColor: "#0E0E43",
      textAlign: "center",
      paddingTop: "12px",
      paddingLeft:"10px",
      paddingRight:"10px",
      paddingBottom:"12px",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "15px",
    };
  }
  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/notifications")
      .then((response) => {
        this.setState({
          isActive: response.data.map(
            (event) => event.isCountDownOrStreamingLiveActive
          ),
          upComingEventName: response.data.map(
            (event) => event.upComingEventName
          ),
          eventDate: response.data.map((event) => event.eventDate),
          eventMonth: response.data.map((event) => event.eventMonth),
          eventYear: response.data.map((event) => event.eventYear),
          hour: response.data.map((event) => event.hour),
          minutes: response.data.map((event) => event.minutes),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // Random component
    const Completionist = () => (
      <p className="countdown">
        <span className="font-italic font-weight-bold"> {this.state.upComingEventName} </span>
        is Streaming Live
      </p>
    );

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
          <span className="CountDown ">
            {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds to{" "}
            <span className="font-italic">{this.state.upComingEventName} </span>
           
          </span>
        );
      }
    };
    return (
      <div>
        <div
          className={this.state.isActive ? "text-center" : "d-none"}
          style={this.divStyle}
        >
          <Countdown
            date={
              this.state.eventYear +
              "-" +
              this.state.eventMonth +
              "-" +
              this.state.eventDate +
              "T" +
              this.state.hour +
              ":" +
              this.state.minutes +
              ":" +
              "00"
            }
            // YYYY-MM-DDTHH:MM:SS
            renderer={renderer}
          />
        </div>
      </div>
    );
  }
}
