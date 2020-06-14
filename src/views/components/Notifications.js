import React, { Component } from "react";
import Countdown from "react-countdown";

const postsData = require("../API/notifications.json");

let upComingEventName = postsData.map((postsData) => {
  return postsData.upComingEventName;
});
let showOrHideEvent = postsData.map((postsData) => {
  return postsData.showOrHideEvent;
});
let showOrHideNotification = postsData.map((postsData) => {
  return postsData.showOrHideNotification;
});

let notification = postsData.map((postsData) => {
  return postsData.notification;
});
let URL = postsData.map((postsData) => {
  return postsData.bannerURL;
});

let date = postsData.map((postsData) => {
  return postsData.coutDownDate;
});
let eventDate = postsData.map((postsData) => {
  return postsData.eventDate;
});
let eventMonth = postsData.map((postsData) => {
  return postsData.eventMonth;
});
let eventYear = postsData.map((postsData) => {
  return postsData.eventYear;
});
let hour = postsData.map((postsData) => {
  return postsData.hour;
});
let minutes = postsData.map((postsData) => {
  return postsData.minutes;
});

// Random component
const Completionist = () => (
  <span className="">
    <a href={URL}>
      <u>{upComingEventName} </u>is Streaming Live{" "}
    </a>
    🎙 📻
  </span>
);

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className="">
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds to{" "}
        <i>{upComingEventName}</i>{" "}
      </span>
    );
  }
};

class Notifications extends Component {
  render() {
    return (
      <>
        {/* <span className={showOrHideNotification}>
      <p className="countdown">{notification}</p>
      </span> */}

        <span className={showOrHideEvent}>
          <div className="topNotification">
            <div className="paratop">
              <div className="row" style={{ paddingTop: 9 }}>
                <div className="col s1 right-align"></div>
                <div className="col s10">
                  <Countdown
                    date={
                      eventYear +
                      "-" +
                      eventMonth +
                      "-" +
                      eventDate +
                      "T" +
                      hour +
                      ":" +
                      minutes +
                      ":" +
                      "00"
                    }
                    // YYYY-MM-DDTHH:MM:SS
                    renderer={renderer}
                  />
                </div>
                <div className="col s1"></div>
              </div>
            </div>
          </div>
        </span>
        <span className={showOrHideNotification}>
          <div className="topNotification">
            <span className="paratop">
              <div className="row">
                <div className="col s1 right-align"></div>
                <div className="col s10">
                  <span>{notification}</span>
                </div>
                <div className="col s1"></div>
              </div>
            </span>
          </div>
          {/* <p className="countdown">{notification}</p> */}
        </span>
      </>
    );
  }
}

export default Notifications;
