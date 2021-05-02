import React, { Component } from "react";
// import NowPlaying from "./base/NowPlaying";
import LogoArea from "../base/LogoArea";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import base, { auth, providers, databased } from "../../utils/FirebaseSettings";
import * as SETTINGS from "../constants/Settings";
import FeaturedRandom from "../homePageComponents/FeaturedRandom";
import { connect } from "react-redux";

import { playIt, addQueue } from "../../redux/Queue/queue.actions";
import PlayGameButton from "../base/PlayGameButton";
import GameAllLeaderboard from "../GameComponents/GameAllLeaderboard";
let qs = require("qs");

class QuizEntry extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.postNewComment = this.postNewComment.bind(this);
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
      duration: "",
      cover: SETTINGS.liveCover,
      isEventPublished: true,
      isEventNoPublishedBannerVisible: true,
      comments: {},
      isLoggedIn: false,
      numberOfComments: 0,
      user: " ",
      commentsLoaded: false,
      randomAvathar: "",
      userName: "",
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        // console.log("------------------------------------");
        // console.log(user);
        localStorage.setItem("userid", this.state.user.uid);
      } else {
        this.setState({ isLoggedIn: false, user: {} });
        localStorage.removeItem("userid");
      }
    });

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
    this.secondaryContentInner = {
      // paddingLeft: "10%",
      // paddingTop: "50px",
      // paddingBottom: "50px",
      // paddingRight: "10%",
      // minHeight: "100px",
    };
  }

  componentDidMount() {
    //

    this.refComments = base.syncState("games/flappy/" + "leaderboard", {
      context: this,

      state: "comments",
    });
    var starCountRef = databased.ref("games/flappy/" + "leaderboard");
    starCountRef.on("value", (snapshot) => {
      this.setState({ commentsLoaded: true });
      // console.log(a);
    });
  }

  postNewComment(comment) {
    const timePublished = Date.now();
    if (false) {
      alert("Unable to Post Comment. Try Again!!!");
    } else {
      comment.user = {
        uid: this.state.user.uid || "anonymous",
        name: this.state.user.displayName || "anonymous",
        time: timePublished,
        photo: this.state.randomAvathar || "anonymous",
      };
      const comments = {
        ...this.state.comments,
      };

      const timestamp = Date.now();
      comments[`comm-${timestamp}`] = comment;

      databased
        .ref("comments/" + `'song-dedication'/comm-${timestamp}`)
        .set(comment);

      alert(
        "Your dedication is recorded. It will be pulblished at 7PM 14 feb 2021 ❤️😊"
      );

      // this.setState({
      //   comments: comments,

      // });
    }
  }
  auth(provider) {
    auth.signInWithPopup(providers[provider]);
  }
  logout() {
    this.setState({ isLoggedIn: false, user: {} });
    localStorage.removeItem("userid");
  }
  onChangeUsername() {
    this.props.playIt({
      audio: this.state.audio,
      cover: this.state.cover,
      title: this.state.title,
      vendor: "audio",
      slug: "/song-dedication",
      duration: this.state.duration,
    });
    this.setState({
      liveAudio: this.state.audio,
      liveCover: this.state.cover,
      liveTitle: this.state.title,
    });
    localStorage.setItem("title", this.state.title);
    localStorage.setItem("cover", this.state.cover);
    localStorage.setItem("url", this.state.audio);
  }
  queueAddHandler() {
    if (true) {
      this.props.addQueue({
        audio: this.state.audio,
        cover: this.state.cover,
        title: this.state.title,
        vendor: "audio",
        slug: "/song-dedication",
        duration: this.state.duartion,
      });
    }
  }
  render() {
    let error = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).error;
    return (
      <div style={this.conatiner}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Song Dedications | The TKM Show</title>
          <link
            rel="canonical"
            href={"https://thetkmshow.in/song-dedications"}
          />
        </Helmet>
        <LogoArea />

        <div style={this.content} id="top" className="pt-4 mb-4">
          <div>
          {!this.state.isLoggedIn && (
              <div className="alert alert-danger" role="alert">
                🚨 You need an account to play this game
              </div>
           )}

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
                    <h4>tkmquiz </h4>
                    <div
                      class="d-flex flex-row bd-highlight mb-2"
                      style={{ fontSize: "10px", color: "#d0cccc" }}
                    >
                      <div class="bd-highlight text-uppercase">
                        Game / Arcade
                      </div>
                      <div class="pl-2 bd-highlight text-uppercase"></div>
                    </div>
                    <div>
                      <PlayGameButton
                        user={this.state.user}
                        isLoggedIn={this.state.isLoggedIn}
                        login={() => this.auth("google")}
                        gameLink={"/games/tkmquiz/play"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={this.secondaryContent}>
            <div style={this.secondaryContentInner}>
              <div className="commentArea mt-5">
                <h5>🌎 Leaderboard</h5>

                <hr
                  style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                />
                {this.state.comments === {} ? (
                  ""
                ) : (
                  <GameAllLeaderboard
                    game={"tkmquiz"}
                    currentUser={this.state.user}
                  />
                )}

                <hr
                  id="bottom"
                  style={{
                    borderTop: "3px solid rgba(115, 110, 110, 0.1)",
                  }}
                />
              </div>

              <FeaturedRandom />
              <div class="d-flex flex-column bd-highlight justify-content-end">
                <div class="p-2 bd-highlight">
                  <a href="#top">Scroll to top</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="media"></div>
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
export default connect(mapStateToProps, { playIt, addQueue })(QuizEntry);
