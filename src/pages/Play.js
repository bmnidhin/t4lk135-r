import React, { Component } from "react";
// import NowPlaying from "./base/NowPlaying";
import {
  Media,
} from "react-media-player";
import LogoArea from "./base/LogoArea";
import axios from "axios";
import Moment from "moment";
// import { Link } from "react-router-dom";
import MainPlayPause from "./base/MainPlayPause";
import { Helmet } from "react-helmet";
import * as SETTINGS from "./constants/Settings";
import FeaturedRandom from "./homePageComponents/FeaturedRandom";
import { connect } from "react-redux";
import { playIt, addQueue } from "../redux/Queue/queue.actions";
import MyComments from "./Firebase/MyComments";
import Skeleton from '@material-ui/lab/Skeleton';

let qs = require("qs");

class Play extends Component {
  constructor(props) {
    super(props);
    this.PlaySonge = this.PlaySonge.bind(this)
    this.queueAddHandler = this.queueAddHandler.bind(this);

    this.state = {
      notLoaded: true,
      liveTitle: "Live Radio",
      title: "",
      publishedAtDate: "",
      publishedAtTime: "",
      content: "",
      liveAudio: SETTINGS.liveURL,
      liveCover: SETTINGS.liveCover,
      audio: SETTINGS.liveURL,
      // duration: 0,
      cover: SETTINGS.liveCover,
      isEventPublished: true,
      isEventNoPublishedBannerVisible: true,
      comments: {},
      isLoggedIn: false,
      numberOfComments: 0,
      user: " ",
      commentsLoaded: false,
      rerender: false,
      isPlaying: false,
      isQueueAdded: false,
    };



    this.conatiner = {
      minHeight: "100vh",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: "white",
      paddingBottom: "50px",
    };
    this.infobox = {
      backgroundColor: SETTINGS.COLOURS.BRAND_BG,
      borderRadius: "5px",
      padding: "10px",
      marginTop: "10px",
    };
    this.content = {
      marginLeft: "5%",
      marginRight: "5%",
    };
    this.secondaryContent = {
      textAlign: "center",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: "white",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/listen/" + this.props.match.params.slug)

      .then((response) => {
        this.setState({
          notLoaded: false,
          title: response.data.title,
          publishedAtDate: response.data.publishedAtDate,
          publishedAtTime: response.data.publishedAtTime,
          content: response.data.content,
          audio: response.data.URL,
          cover: response.data.cover,

          duration: response.data.duration,
          // cover: response.data.cover,
          isEventPublished: response.data.isEventPublished,
        });
        let autoplay = qs.parse(this.props.location.search, {
          ignoreQueryPrefix: true,
        }).autoplay;
        let seekTo = qs.parse(this.props.location.search, {
          ignoreQueryPrefix: true,
        }).seek;
        if (autoplay == "true") {
          this.setState({
            liveAudio: response.data.URL,
            liveCover: response.data.cover,
            liveTitle: response.data.title,
          });
        }
      })
      .then(this.check(this.state.publishedAtDate, this.state.publishedAtTime))
      .catch((error) => {
        this.setState({
          notLoaded: true,
        });
        // alert("Some Error, Try again (404)");
        // window.location = "/listen";
        console.log(error);
      });
    //

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
    this.setState({
      isEventNoPublishedBannerVisible: isEventPublished,
    });
  }
  queueAddHandler() {
    if (true) {
      this.props.addQueue({
        audio: this.state.audio,
        cover: this.state.cover,
        title: this.state.title,
        vendor: "audio",
        slug: "/listen/" + this.props.match.params.slug,
        duration: this.state.duartion,
      });
    }
  }
  PlaySonge() {
    this.props.playIt({
      audio: this.state.audio,
      cover: this.state.cover,
      title: this.state.title,
      vendor: 'audio',
      slug: '/listen/' + this.props.match.params.slug,
      duration: this.state.duration,
    })
    this.setState({
      liveAudio: this.state.audio,
      liveCover: this.state.cover,
      liveTitle: this.state.title,
    })
    localStorage.setItem('title', this.state.title)
    localStorage.setItem('cover', this.state.cover)
    localStorage.setItem('url', this.state.audio)
  }
  render() {
    return (
      <div key={this.props.match.params.slug}>
        <Media>
          <div style={this.conatiner}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{this.state.title} | The TKM Show</title>
              <link
                rel="canonical"
                href={
                  "https://thetkmshow.in/listen/ " + this.props.match.params.slug
                }
              />
            </Helmet>
            <LogoArea />

            <div id="top" className="p-3">
              <div style={this.infobox}>
                <div class="row">
                  <div class="col-sm-4">
                    <img
                      src={this.state.cover}
                      width="100%"
                      className="roundedImage"
                      alt="Poster"
                    ></img>
                  </div>
                  <div class="col-sm-8">
                    <div className=" p-2 pt-4 text-break">
                      <div className={this.state.notLoaded ? "" : "d-none"}>
                  
                       <Skeleton variant="text" />
                      </div>

                      <h4>{this.state.title}</h4>
                      {/* <button onClick={this.handlePlayIt}>haha</button> */}
                      <div
                        class="d-flex flex-row bd-highlight mb-2"
                        style={{ fontSize: "10px", color: "#d0cccc" }}
                      >
                        <div class="bd-highlight text-uppercase">
                          {this.state.duration}
                        </div>
                        <div class="pl-2 bd-highlight text-uppercase"></div>
                      </div>
                      <MainPlayPause
                        slug={"/listen/" + this.props.match.params.slug}
                        nowPlaying={this.props.nowPlaying || "live"}
                        switch={this.PlaySonge}
                        addQueue={this.queueAddHandler}
                      />

                      <p style={{ color: "#d0cccc" }} className="text-justify">
                        {" "}
                        {this.state.content}
                        <div className={this.state.notLoaded ? "" : "d-none"}>
                       
                          <Skeleton variant="rect" width={"100%"} height={118} />
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={this.secondaryContent}>
                <div style={this.secondaryContentInner}>
                  <MyComments slug={this.props.match.params.slug} />
                  <FeaturedRandom />
                  <div class="d-flex flex-column bd-highlight justify-content-end">
                    <div class="p-2 bd-highlight">
                      <a href="#top">Scroll to top</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Media>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    nowPlaying: state.queue.nowPlaying,
    myQueue: state.queue.myQueue,
  };
};
export default connect(mapStateToProps, { playIt, addQueue })(Play);
