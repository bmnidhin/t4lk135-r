import React, { Component } from "react";
import NowPlaying from "./base/NowPlaying";
import { Media, Player, controls } from "react-media-player";
import LogoArea from "./base/LogoArea";
// import axios from "axios";
import HeroText from "./homePageComponents/HeroText";
import ListenAfterLive from "./homePageComponents/ListenAfterLive";
import RecentPosters from "./homePageComponents/RecentPosters";
import FeaturedPosts from "./homePageComponents/FeaturedPosts";
import FeaturedPlaylists from "./homePageComponents/FeaturedPlaylists";
import FlotingPlayPause from "./base/FlotingPlayPause";
import { Helmet } from "react-helmet";
import SubmitPromo from "./SubmitPromo";
import * as SETTINGS from './constants/Settings';
import FeaturedLiveChat from "./Firebase/FeaturedLiveChat";
// import liveStreamURL from "../utils/Settings";
// const { PlayPause, MuteUnmute } = controls;

const Background = require("./base/img/wave.jpg");

export default class homepage extends Component {
  state = {  
    url: SETTINGS.liveURL,
    cover:SETTINGS.liveCover,
    title: "Live Radio",
  };
  data = URL
  heroarea = {
    minHeight: "80vh",
    backgroundColor: "#030229",
    textAlign: "center",
    paddingBottom: "30px",
    backgroundImage: "url(" + Background + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  mainContent = {
    textAlign: "center",
    marginLeft: "10%",
    marginTop: "30px",
    marginRight: "10%",

    minHeight: "100px",
  };
  secondaryContent = {
    textAlign: "center",
    backgroundColor: "#030229",
    color: "white",
  };
  secondaryContentInner = {
    paddingLeft: "10%",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingRight: "10%",

    minHeight: "100px",
  };
  render() {
    return (
      <Media>
        <div>
          <Helmet>
          <meta charSet="utf-8" />
           <title>The TKM Show </title>
           <link
          rel="canonical"
          href="https://thetkmshow.in"
          />
          </Helmet>
          <div style={this.heroarea}>
            <LogoArea />
            <HeroText />
            <div style={this.mainContent}>
              <ListenAfterLive />
      {/*  <FeaturedLiveChat/> */}
             
              <RecentPosters />
            </div>
          </div>
          <div style={this.secondaryContent}>
            <div style={this.secondaryContentInner}>
             <SubmitPromo/>
              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
              <FeaturedPosts />
              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
              <FeaturedPlaylists />
            </div>
          </div>
          <FlotingPlayPause cover={this.state.cover} title={this.state.title} />

          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
            <Player src={this.state.url} vendor="audio" autoPlay="true" />
          </div>
        </div>
      </Media>
    );
  }
}
