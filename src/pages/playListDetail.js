import React, { Component } from "react";
import NowPlaying from "./base/NowPlaying";
import {
  Media,
  Player,
  controls,
  withMediaProps,
  utils,
} from "react-media-player";
import LogoArea from "./base/LogoArea";
import axios from "axios";
import Moment from "moment";
import { Link } from "react-router-dom";
import FlotingPlayPause from "./base/FlotingPlayPause";
import MainPlayPause from "./base/MainPlayPause";
import { Helmet } from "react-helmet";
import MainPlaylistPlayPause from "./base/MainPlaylistPlayPause";
import FeaturedPosts from "./homePageComponents/FeaturedPosts";
import FeaturedPlaylists from "./homePageComponents/FeaturedPlaylists";
const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls;
const settings = require("./API/settings.json");

const image =
  "https://a10.gaanacdn.com/images/albums/51/1596151/crop_175x175_1596151.jpg";
let URL = settings.map((settings) => {
  return settings.streamURL;
});
let liveCover = settings.map((settings) => {
  return settings.liveCover;
});

class playListDetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.state = {
      liveTitle: "Live Radio",
      title: "Loading.....",
      publishedAtDate: "",
      publishedAtTime: "",
      content: "",
      liveAudio: URL,
      liveCover: liveCover,
      selectedTrack: 0,
      duration: "",
      cover: liveCover,
      isEventPublished: true,
      tracks: [],
    };

    this.conatiner = {
      minHeight: "100vh",
      backgroundColor: "#030229",
      color: "white",
      paddingBottom: "50px",
    };
    this.infobox = {
      backgroundColor: "#0e0e43",
      borderRadius: "5px",
      padding: "10px",
      marginTop: "10px",
    };
    this.content = {
      marginLeft: "10%",
      marginRight: "10%",
    };
    this.secondaryContent = {
      textAlign: "center",
      backgroundColor: "#030229",
      color: "white",
    };
    this.secondaryContentInner = {
      // paddingLeft: "10%",
      // paddingTop: "50px",
      // paddingBottom: "50px",
      // paddingRight: "10%",
      // minHeight: "100px",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/playlist/" + this.props.match.params.slug)

      .then((response) => {
        this.setState({
          title: response.data.title,
          publishedAtDate: response.data.publishedAtDate,
          publishedAtTime: response.data.publishedAtTime,
          content: response.data.content,
          audio: response.data.URL,
          cover: response.data["album-art"],

          duration: response.data.duration,
          tracks: response.data.songs,

          isEventPublished: response.data.isEventPublished,
        });
      })
      .then(this.check(this.state.publishedAtDate, this.state.publishedAtTime))
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
    this.setState({
      isEventNoPublishedBannerVisible: isEventPublished,
    });
  }

  onChangeUsername() {
    this.setState({
      liveAudio: this.state.audio,
      liveCover: this.state.cover,
      liveTitle: this.state.title,
    });
  }

  render() {
    const { className, style, media } = this.props;
    const TRACKS = this.state.tracks;

    const list = TRACKS.map((item) => {
      return (
        <tr
          key={item.id}
          onClick={() =>
            this.setState({
              selectedTrack: item.id,
              liveAudio: item.audio,
              liveCover: this.state.cover,
              liveTitle: item.title,
            })
          }
          style={{
            // fontWeight: item.title === this.state.selectedTrack && "bold",
            fontWeight: item.id === this.state.selectedTrack && "bold",
            // color: item.id === this.state.selectedTrack && "green",
            backgroundColor:
              item.id === this.state.selectedTrack && "rgba(3, 2, 41, 0.44)",
          }}
        >
          <th scope="row">{item.id}</th>
          <td>{item.title}</td>
          <td className="text-rightz">{item.duration}</td>
        </tr>
      );
    });
    return (
      <Media>
        <div style={this.conatiner}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {this.state.selectedTrack == 0
                ? this.state.title
                : this.state.liveTitle}{" "}
              | The TKM Show
            </title>
            <link
              rel="canonical"
              href={"https://thetkmshow.in/plalist/" + this.state.title}
            />
          </Helmet>
          <LogoArea />

          <div style={this.content}>
            <div
              className={
                this.state.isEventNoPublishedBannerVisible ? "" : "d-none"
              }
              style={{
                textAlign: "center",
                fontSize: "10px",
                backgroundColor: "#0e0e43",
                borderRadius: "5px",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              Not yet published. Listen after {this.state.publishedAtDate}{" "}
              &nbsp; {this.state.publishedAtDate}
            </div>
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
                    <h4>{this.state.title}</h4>
                    <div
                      class="d-flex flex-row bd-highlight mb-2"
                      style={{ fontSize: "10px", color: "#d0cccc" }}
                    >
                      <div class="bd-highlight text-uppercase">
                        {this.state.duration}
                      </div>
                      <div class="pl-2 bd-highlight text-uppercase"></div>
                    </div>
                    <MainPlaylistPlayPause />
                    <p style={{ color: "#d0cccc" }} className="text-justify">
                      {" "}
                      {this.state.content}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <table
                  class="table table-dark"
                  style={{ backgroundColor: "#03022900", cursor: "pointer" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col text-right">Duration</th>
                    </tr>
                  </thead>
                  <tbody>{list}</tbody>
                </table>
              </div>
            </div>
            <div style={this.secondaryContent}>
              <div style={this.secondaryContentInner}>
                <hr
                  style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                />
                <FeaturedPosts />
              </div>
            </div>
          </div>

          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
            <Player src={this.state.liveAudio} vendor="audio" autoPlay="true" />
          </div>
          <FlotingPlayPause
            cover={this.state.liveCover}
            title={this.state.liveTitle}
          />
        </div>
      </Media>
    );
  }
}
export default withMediaProps(playListDetail);
