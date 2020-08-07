import React, { Component } from "react";
import Countdown from "react-countdown";
import axios from "axios";
import Moment from "moment";
export default class CountDown extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.state = {
      isActive: false,
      upComingEventName: "test event",
      countDownDate:'2019-08-27',
      countDownTime:'19:10:00',
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
          countDownDate: response.data.map(
            (event) => event.countDownDate
          ),
          countDownTime: response.data.map(
            (event) => event.countDownTime
          ),
          
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const currentTime = Moment().format();
    const publishAt = this.state.countDownDate +"T" +this.state.countDownTime + "+05:30";

    const a = Moment(publishAt);
    const b = Moment(currentTime);
    const myDiff = b.diff(a);

    const isBannerActive = myDiff < 3600000  //1 hour after live ends
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
        <span className="font-italic">{this.state.upComingEventName}</span>
           
          </span>
        );
      }
    };
    return (
      <div>
        <div
          className={
            (this.state.isActive[0] && isBannerActive)
            ? "text-center" : "d-none"}
          style={this.divStyle}
        >
          <Countdown
            date={this.state.countDownDate +"T" +this.state.countDownTime}
            // YYYY-MM-DDTHH:MM:SS
            renderer={renderer}
          />
        </div>
      </div>
    );
  }
}
