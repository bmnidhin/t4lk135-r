import React, { Component } from "react";
import { Media, Player } from "react-media-player";
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
import FeaturedClubs from "./homePageComponents/FeaturedClub";
import Adbanner from "./AdBanner";
import RecentlyPlayed from "./homePageComponents/RecentlyPlayed";
import BottomNav from "./base/BottomNav";
import FeaturedRandom from "./homePageComponents/FeaturedRandom";
import Promobox from "./PromoBox";
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
    backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
    textAlign: "center",

    backgroundImage: "url(" + Background + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  inner= {
    minHeight: "80vh",
    backgroundColor: SETTINGS.COLOURS.OVERLAY,
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  mainContent = {
    textAlign: "center",
    marginLeft: "10%",
    marginTop: "30px",
    marginRight: "10%",


  };
  secondaryContent = {
    textAlign: "center",
    backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
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
            <div style={this.inner}>
            <LogoArea page={'home'} />
            <HeroText />
            <div style={this.mainContent}>
            {/* <ClubAdvt top={"Read & Watch"} heading={"Check out a video by SAE BAJA TKMCE and the Annual Magazine of Mechanical Department"} link={"p/sae-tkmce"}/> */}
            {/* <ClubAdvt top={"Read"} heading={"Check out the annual magazine of Mechanical Department"} link={"mech-magazine"}/>  */}
              <ListenAfterLive />
              {/* <FeaturedLiveChat/> */}
            
              <FeaturedRandom />
               
              
               
              {/* <RecentPosters /> */}
            </div>
            </div>
          </div>
          <div style={this.secondaryContent}>
            <div style={this.secondaryContentInner}>
            {/* <Promobox title="Hey! Checkout Anonymous Song Dedication ❤️😊" subtitle="Dedicate" link="/song-dedication" target=""/> */}
            <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
             <RecentlyPlayed page="home"/>
             
             <FeaturedPosts />
             <SubmitPromo/>
            
              
              {/* <Adbanner/> */}
              
             
              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
              <FeaturedPlaylists />
              {/* <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
              <FeaturedClubs/> */}
            </div>
          </div>
          <FlotingPlayPause cover={this.state.cover} title={this.state.title} src={this.state.url}/>
          <BottomNav selected='home'/>
          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
            <Player src={this.state.url} vendor="audio" autoPlay="true" />
          </div>
        </div>
      </Media>
    );
  }
}
