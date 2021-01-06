import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import { Link } from 'react-router-dom';
// import Skeleton from '@yisheng90/react-loading';

export default class FeaturedPosts extends Component {
  state = {
    notLoaded:true,
    listen: [],
    sliceAt:3
  };
  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/listen")
      .then((response) => {
        this.setState({
          notLoaded:false,
          listen: response.data,
        });
        
      })
      .then(()=>{
        const publishedDate = this.state.listen[0].publishedAtDate;
        const publishedTime = this.state.listen[0].publishedAtTime;
        const currentTime = Moment().format();
        const publishAt = publishedDate + "T" + publishedTime + "+05:30";

        const a = Moment(publishAt);
        const b = Moment(currentTime);
        const myDiff = b.diff(a);

        const isEventPublished = myDiff > 0;
        const isBannerActive = myDiff > 0 && myDiff < 86400000; //displaybanner for 24 hr
        if (isEventPublished) {
          this.setState({
            sliceAt:3
          });
        } else {
          this.setState({
            sliceAt:4
          });
        }
      })
      .catch((error) => {
        this.setState({
          notLoaded:true,
        });
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
     color:"#ffffff"
  }
  itemHeading={
    textAlign:"left",
    fontSize:"10px",
    paddingTop:"15px",
    color:"white",
  }
  render() {
    return (
      <div className="pt-3 pb-5">
        <div className="d-flex flex-row bd-highlight justify-content-between mb-3">
          <div className=" bd-highlight"> <span className="font-weight-bolder"style={this.heading}>LATEST</span></div>
          <div className=" bd-highlight">
              
          <Link to="/listen">VIEW ALL</Link>
          </div>
          
        </div>
       

        <div className="row">
         
          <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
          Loading....
           </div>
           <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
          Loading....
           </div>
           <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
          Loading....
           </div>
           <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
         {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
       
           </div>
           <div
              className= {true?"col-6 col-md-3":"d-none"}
              
              // key={track.slug}
            >
              <Link to={"/live"} className="">
                <img
                  src="https://bmnidhin.github.io/t4lk-static/s1/live.jpg"
                  width="100%"
                  className="roundedImage"
                  alt="Poster"
                ></img>
                 <p style={this.itemHeading} className='text-truncate'>Live Radio</p>
              </Link>
            </div>
          {this.state.listen.slice(0, this.state.sliceAt).map((track) => (
            <div
              className={
                this.check(track.publishedAtDate, track.publishedAtTime)
                  ? "col-6 col-md-3"
                  : "d-none"
              }
              key={track.slug}
            >
              <Link to={"/listen/" + track.slug}>
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
