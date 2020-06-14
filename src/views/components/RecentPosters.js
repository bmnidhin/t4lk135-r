import React, { Component } from "react";

const postsData = require("../API/notifications.json");

// event Two
let imageTwo = require("../img/aswin8.jpg");

// event Three
let imageThree = require("../img/launch.jpg");

let showOrHidePoster = postsData.map((postsData) => {
  return postsData.showOrHidePoster;
});

class RecentPosters extends Component {
  render() {
    return (
      <div className={showOrHidePoster + " " + "nbm-img"}>
        <div className="section">
          <div className="row">
            <div className="col s12 m6">
              <div className="icon-block">
                <img
                  src={imageTwo}
                  width="100%"
                  className="nbm-poster z-depth-3"
                  alt="Poster"
                ></img>
                <br />
                <br />
                {/* <div title="Add to Calendar" className="addeventatc"> 
           Add Event to Calendar
           <span className="start">{eventTwoStartTime}</span>
           <span className="end">{eventTwoEndTime}</span>
           <span className="timezone">{timezone}</span>
           <span className="title">{eventTwoTitle}</span>
           <span className="description">{eventTwoDescription}</span>
           <span className="location">{location}</span>
       </div><br/><br/> */}
              </div>
            </div>

            <div className="col s6 m6 hide-on-small-only">
              <div className="icon-block">
                <img
                  src={imageThree}
                  width="100%"
                  className="nbm-poster z-depth-3"
                  alt="Poster"
                ></img>
                <br />
                <br />
                {/* <div title="Add to Calendar" className="addeventatc"> 
           Add Event to Calendar
           <span className="start">{eventThreeStartTime}</span>
           <span className="end">{eventThreeEndTime}</span>
           <span className="timezone">{timezone}</span>
           <span className="title">{eventThreeTitle}</span>
           <span className="description">{eventThreeDescription}</span>
           <span className="location">{location}</span>
       </div><br/><br/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPosters;
