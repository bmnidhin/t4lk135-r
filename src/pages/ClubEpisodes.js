import React, { Component } from "react";
import LogoArea from "./base/LogoArea";
import { Media, Player, controls } from "react-media-player";
import axios from "axios";
import Moment from "moment";
import { Link } from "react-router-dom";
import FlotingPlayPause from "./base/FlotingPlayPause";
import { Helmet } from "react-helmet";
import * as SETTINGS from './constants/Settings';
import Adbanner from "./AdBanner";
import BottomNav from "./base/BottomNav";
import Placehold from "./base/Placehold";
// import Skeleton from '@yisheng90/react-loading';
// const settings = require("./API/settings.json");

// let URL = settings.map((settings) => {
//   return settings.streamURL;
// });
// let liveCover = settings.map((settings) => {
//   return settings.liveCover;
// });

export default class ClubEpisodes extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded:true,
      url: SETTINGS.liveURL,
      cover:SETTINGS.liveCover,
      title: "Live Radio",
      listen: [],
      comments: {},
      isLoggedIn: false,
      user: "",
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
              //localStorage.removeItem('userid')
    //   }
    // });

    this.conatiner = {
      minHeight: "100vh",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
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
      .get("https://api.thetkmshow.in/clubs")
      .then((response) => {
        this.setState({
          notLoaded:false,
          listen: response.data,
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
              //localStorage.removeItem('userid')

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
              <h3 style={{ textAlign: "center" }}>Club99 Series</h3>
            </div>
            <div style={this.content}>
              {/* <Adbanner/> */}
              <div className="row">
                
                {this.state.listen.slice(0, 20).map((track) => (
                  <div
                    className={
                      this.check(track.publishedAtDate, track.publishedAtTime)
                        ? "col-6 col-md-3"
                        : "d-none"
                    }
                    key={track.slug}
                  >
                    <Link to={"/club99/" + track.slug} className="">
                      <img
                        src={track.cover}
                        width="100%"
                        className="roundedImage"
                        alt="Poster"
                      ></img>
                      <p style={this.itemHeading} className="text-truncate">
                        {track.title}
                      </p>
                    </Link>
                  </div>
                ))}
                <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
           <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
           <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
           <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
              </div>
            </div>
          </div>
          {/* <div className="container">
          {this.state.isLoggedIn && (
            <div className="user">
              <img
                className="photo"
                alt={this.state.user}
                src={this.state.user.photoURL}
              />
              <h5 className="display-name"> {this.state.user.displayName} </h5>
              <p className="email"> {this.state.user.email} </p>
              <NewComment postNewComment={this.postNewComment} />
              <button
                className="btn btn-outline-secondary"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          )}
          {!this.state.isLoggedIn && (
            <div className="alert alert-dark">
              <h1 className="title">ReactJS Comments App</h1>
              <label className="sign-in">Sign in: </label>
              <button
                className="btn btn-danger"
                onClick={() => this.auth("google")}
              >
               
                google
              </button>
            </div>
           
          )}
          
          <Comments comments={this.state.comments} />
        </div> */}
          <FlotingPlayPause cover={this.state.cover} title={this.state.title} />
          <BottomNav selected="club"/>
          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
            <Player src={this.state.url} vendor="audio" autoPlay="true" />
          </div>
        </div>
      </Media>
    );
  }
}
