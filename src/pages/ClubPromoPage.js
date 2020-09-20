import React, { Component } from "react";
import NowPlaying from "./base/NowPlaying";
import LogoArea from "./base/LogoArea";
import { Media, Player, controls } from "react-media-player";
import axios from "axios";
import Moment from "moment";
import { Link } from "react-router-dom";
import FlotingPlayPause from "./base/FlotingPlayPause";
import { Helmet } from "react-helmet";
import NewComment from "./Firebase/NewComment";
import Comments from "./Firebase/Comments";
import base, { auth, providers } from "../utils/FirebaseSettings";
import * as SETTINGS from './constants/Settings';
import ClubAdvt from "./base/ClubAdvt";
// import Skeleton from '@yisheng90/react-loading';
// const settings = require("./API/settings.json");
const { PlayPause, MuteUnmute } = controls;

const currentTime = Moment();
// let URL = settings.map((settings) => {
//   return settings.streamURL;
// });
// let liveCover = settings.map((settings) => {
//   return settings.liveCover;
// });

export default class ClubPromoPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded:true,
      url: SETTINGS.liveURL,
      cover:SETTINGS.liveCover,
      title: "Live Radios",
      pageTitle:"Loading..",
      hasBanner:false,
      bannerContent:{
        "subOne":"Read",
        "heading":"Magazine Name by Mechanical Department Published",
        "subTwo":""
        ,"link":"p/kettonam"
      },
      hasYoutube:false,
      youtubeLink:"",

    };
    // this.refComments = base.syncState("ithaan", {
    //   context: this,
    //   state: "comments"
    // });
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({ isLoggedIn: true, user });
    //     console.log("------------------------------------");
    //     console.log(user);
    //   } else {
    //     this.setState({ isLoggedIn: false, user: {} });
    //   }
    // });

    this.conatiner = {
      minHeight: "100vh",
      backgroundColor: "#030229",
      color: "white",
    };
    this.content = {
      marginLeft: "10%",
      marginRight: "10%",
    };
    this.itemHeading={
      textAlign:"left",
      fontSize:"10px",
      paddingTop:"15px",
      color:"white",
    }
  }

  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/promo/" + this.props.match.params.slug)
      .then((response) => {
        console.log(response.data)
        this.setState({
          pageTitle:response.data.title,
          notLoaded:false,
          listen: response.data,
          hasBanner:response.data.hasBanner,
          bannerContent:response.data.bannerContent,
          hasYoutube:response.data.hasYoutube,
          youtubeLink:response.data.youtubeLink
        });
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

  onChangeUsername() {
    this.setState({
      playing: "aana",
    });
  }
  // postNewComment(comment) {
  //   comment.user = {
  //     uid: this.state.user.uid,
  //     name: this.state.user.displayName,
  //     photo: this.state.user.photoURL,

  //   };
  //   const comments = {
  //     ...this.state.comments
  //   };
  //   const timestamp = Date.now();
  //   comments[`comm-${timestamp}`] = comment;
  //   this.setState({
  //     comments: comments
  //   });
  // }
  // auth(provider) {
  //   auth.signInWithPopup(providers[provider]);
  // }
  // logout(){
  //   this.setState({ isLoggedIn: false, user: {} });

  // }
  render() {
    return (
      <Media>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Listen | The TKM Show</title>
            <link rel="canonical" href="https://thetkmshow.in/listen" />
          </Helmet>
          <div style={this.conatiner}>
            <LogoArea />
            <div style={{ marginTop: "30px", paddingBottom: "30px" }}>
    <h3 style={{ textAlign: "center" }}>{this.state.pageTitle}</h3>
              
            </div>
            <div style={this.content}>
            {this.state.hasYoutube &&(
              <iframe width="100%" height="300" src={this.state.youtubeLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )}
            <div className="mt-2 mb-3" ></div>
            {this.state.hasYoutube &&(
              <ClubAdvt top={this.state.bannerContent.subOne} heading={this.state.bannerContent.heading} link={this.state.bannerContent.link} target="_blank"/>
            )}
             <div className="mt-2 mb-3" ></div>
              <div className="row">
                
            
              </div>
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
