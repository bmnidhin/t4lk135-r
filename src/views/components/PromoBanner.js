import React, { Component } from "react";
import Moment from 'moment';
// import { Link } from 'react-router';

const postsData = require("../API/notifications.json");
const settings = require("../API/settings.json");
const postsLatest = require("../API/tracks.json");

let imageOne = settings.map((settings) => {
  return settings.bannerImg;
});

let publishedAtDate = postsLatest.slice(0, 1).map((postsLatest) => {
  return postsLatest.publishedAtDate;
});
let publishedAtTime = postsLatest.slice(0, 1).map((postsLatest) => {
  return postsLatest.publishedAtTime;
});

let bannerURL = postsLatest.slice(0, 1).map((postsLatest) => {
  return postsLatest.slug;
});

const currentTime = Moment().format();
const publishAt = publishedAtDate + "T" + publishedAtTime + "+05:30";


const a = Moment(publishAt);
const b = Moment(currentTime);
const myDiff = b.diff(a);

const isBannerActive = myDiff > 0 && myDiff <86400000 //displaybanner for 24 hr





let showOrHideBanner = postsData.map((postsData) => {
  return postsData.showOrHideBanner;
});



class PromoBanner extends Component {
  render() {
    return (
      <>
        <div className="nbm-img">
          <div className="hide">
          {isBannerActive ? 'Banner Active' : 'Banner Hidden'} <br/>
          {publishAt}
          </div>
        
          <div className={isBannerActive ? showOrHideBanner : 'hide'}>
            <div className="sections">
              <div className="row">
                <div className="col s12 m12">
                  <a href="/listen/"{bannerURL}>
                    <div className="icon-block">
                      <img
                        src={imageOne}
                        width="100%"
                        className="nbm-poster z-depth-3"
                        alt="Poster"
                      ></img>

                      {/* <div class="left"><a href ="/listen/orma-undo-ee-mugham"> Listen </a></div> */}
                      {/* <div class="right"><i className="small material-icons">arrow_forward</i></div> */}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PromoBanner;
