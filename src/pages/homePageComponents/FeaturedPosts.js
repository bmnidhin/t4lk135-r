import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import { Link } from 'react-router-dom';

export default class FeaturedPosts extends Component {
  state = {
    listen: [],
  };
  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/listen")
      .then((response) => {
        this.setState({
          listen: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  check(date, time) {
    const publishedDate = date;
    const publishedTime = time;
    const currentTime = Moment().format();
    const publishAt = publishedDate + "T" + publishedTime + "+05:30";

    const a = Moment(publishAt);
    const b = Moment(currentTime);
    const myDiff = b.diff(a);

    const isEventPublished = myDiff > 0;
    const isBannerActive = myDiff > 0 && myDiff < 86400000; //displaybanner for 24 hr
    return isEventPublished;
  }

  heading={
     paddingTop:"20px",
     paddingBottom:"15px",
     textAlign:"left",
  }
  itemHeading={
    textAlign:"left",
    paddingTop:"10px",
    color:"white",
  }
  render() {
    return (
      <div>
        <div className="d-flex flex-row bd-highlight justify-content-between mb-3">
          <div className=" bd-highlight"> <span className="font-weight-bolder"style={this.heading}>LISTEN AGAIN</span></div>
          <div className=" bd-highlight">
              
          <Link to="/listen">VIEW ALL</Link>
          </div>
          
        </div>
       

        <div className="row">
          {this.state.listen.slice(0, 6).map((track) => (
            <div
              className={
                this.check(track.publishedAtDate, track.publishedAtTime)
                  ? "col-6 col-md-3"
                  : "d-none"
              }
              key={track.slug}
            >
              <Link to={"/listen/" + track.slug} className="">
                <img
                  src={track.cover}
                  width="100%"
                  className="roundedImage"
                  alt="Poster"
                ></img>
                <p style={this.itemHeading} className='text-truncate'>{track.title}</p>
              </Link>
            </div>
          ))}
        </div>
      
      </div>
    );
  }
}
