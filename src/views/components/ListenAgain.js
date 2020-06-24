import React, { Component } from "react";
import Axios from "axios";
import Moment from 'moment';
// import { Link } from 'react-router';



class ListenAgain extends Component {
  state = {
    listen: [],
  };

  componentDidMount() {
    Axios.get(
      "https://bmnidhin.github.io/t4lk135-r/src/views/API/tracks.json"
    ).then((res) => {
      this.setState({ listen: res.data });
    });
  }
 check(date,time){
  const publishedDate = date
  const publishedTime = time
  const currentTime = Moment().format();
  const publishAt = publishedDate + "T" + publishedTime + "+05:30";
  
  
  const a = Moment(publishAt);
  const b = Moment(currentTime);
  const myDiff = b.diff(a);
  
  const isEventPublished = myDiff > 0;
  const isBannerActive = myDiff > 0 && myDiff <86400000 //displaybanner for 24 hr
  return isEventPublished
 }

 
 render() {

    return (
      <>
      {/* title section */}
        <div className={"nbm-img"}>
          <div className="section">
            <div className="row">
              <div className="left-align">
                <div className="row">
                  <div className="col s6">
                    <h5>Listen Again</h5>
                  </div>
                  <div className="col s6 right-align">
                    <a href="/listen">
                      <br />
                      View All
                    </a>
                  </div>
                </div>
              </div>
      {/* map episodes from json response */}
              {this.state.listen.map((track) => (
                
                <div className={this.check(track.publishedAtDate,track.publishedAtTime) ? 'col s6 m4' : 'hide'} key={track.slug}>
                  <a href={"/listen/" + track.slug}>
                    <div className="icon-block">
                      <img
                        src={track.cover}
                        width="100%"
                        className="nbm-poster z-depth-3"
                        alt="Poster"
                      ></img>
                      
                      
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListenAgain;
