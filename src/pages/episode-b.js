import React, { Component } from "react";
// import NowPlaying from "./base/NowPlaying";
import {
  Media,
  Player,
  controls,
  withMediaProps,
  // utils,
} from "react-media-player";
import LogoArea from "./base/LogoArea";
import axios from "axios";
import Moment from "moment";
// import { Link } from "react-router-dom";
import FlotingPlayPause from "./base/FlotingPlayPause";
import MainPlayPause from "./base/MainPlayPause";
import { Helmet } from "react-helmet";
import FeaturedPosts from "./homePageComponents/FeaturedPosts";
import NewComment from './Firebase/NewComment'
import Comments from './Firebase/Comments'
import base, { auth, providers, databased } from '../utils/FirebaseSettings'
import * as SETTINGS from './constants/Settings';
import Adbanner from "./AdBanner";
import BottomNav from "./base/BottomNav";
// import Skeleton from '@yisheng90/react-loading';
// const {
//   PlayPause,
//   CurrentTime,
//   Progress,
//   SeekBar,
//   Duration,
//   MuteUnmute,
//   Volume,
//   Fullscreen,
// } = controls;
// const settings = require("./API/settings.json");
// // const timePublished = Date.now();
// const image =
//   "https://a10.gaanacdn.com/images/albums/51/1596151/crop_175x175_1596151.jpg";
// let URL = settings.map((settings) => {
//   return settings.streamURL;
// });
// let liveCover = settings.map((settings) => {
//   return settings.liveCover;
// });

class episode extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.postNewComment = this.postNewComment.bind(this);

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
      commentsLoaded: false
    };

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        // console.log("------------------------------------");
        // console.log(user);
        localStorage.setItem("userid",this.state.user.uid)
      } else {
        this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
      }
    });

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
      marginLeft: "5%",
      marginRight: "5%",
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
      .get("https://api-thetkmshow.vercel.app/listen/" + this.props.match.params.slug)

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
      })
      .then(this.check(this.state.publishedAtDate, this.state.publishedAtTime))
      .catch((error) => {
        this.setState({
          notLoaded: true,
        });
        console.log(error);
      });
    this.refComments = base.syncState("comments/" +this.props.match.params.slug, {
      context: this,

      state: "comments",
    });
    var starCountRef = databased.ref("comments/" +this.props.match.params.slug);
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ commentsLoaded: true });
      // console.log(a);
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

  postNewComment(comment) {
    const timePublished = Date.now();
    if (this.state.user.uid === '' || this.state.user.displayName === '' || this.state.user.photoURL === '') {
      alert("Unable to Post Comment. Try Again!!!");
    } else {
      comment.user = {
        uid: this.state.user.uid,
        name: this.state.user.displayName,
        time: timePublished,
        photo: this.state.user.photoURL,

      };
      const comments = {
        ...this.state.comments
      };


      const timestamp = Date.now();
      comments[`comm-${timestamp}`] = comment;

      databased.ref("comments/" +this.props.match.params.slug + `/comm-${timestamp}` ).set(comment)


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
              localStorage.removeItem('userid')

  }
  onChangeUsername() {
    this.setState({
      liveAudio: this.state.audio,
      liveCover: this.state.cover,
      liveTitle: this.state.title,
    });
    localStorage.setItem('title', this.state.title)
    localStorage.setItem('cover', this.state.cover)
    localStorage.setItem('url', this.state.audio)
  }

  render() {
    const { className, style, media } = this.props;

    return (
      <Media>
        <div style={this.conatiner}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{this.state.title} | The TKM Show</title>
            <link
              rel="canonical"
              href={"https://thetkmshow.in/listen " + this.props.match.params.slug}
            />
          </Helmet>
          <LogoArea />

          <div style={this.content} id="top">
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
                    <div className={this.state.notLoaded ? "" : "d-none"}>
                      {/* <Skeleton color="rgb(3, 2, 41,0.3)"/>
                  <Skeleton color="rgb(3, 2, 41,0.3)" width="10%"/> */}
                  Loading........
                 </div>

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
                    <MainPlayPause switch={this.onChangeUsername} />
                    {/* <Status src={this.state.liveAudio}
                      cover={this.state.liveCover}
                      title={this.state.liveTitle}
                      url = {this.state.liveAudio}
                      slug={this.props.match.params.slug}
                      name={this.state.user.displayName}
                      id={this.state.user.uid}
                      auth ={this.state.isLoggedIn}
                      
                    /> */}
                    <p style={{ color: "#d0cccc" }} className="text-justify">
                      {" "}
                      {this.state.content}
                      <div className={this.state.notLoaded ? "" : "d-none"}>
                        {/* <Skeleton color="rgb(3, 2, 41,0.3)" rows={6}/> */}
                  Loading
                 </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={this.secondaryContent}>
              <div style={this.secondaryContentInner}>
                <div className="commentArea">
                  <Adbanner />
                  <hr
                    style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                  />
                  <div class="d-flex flex-row bd-highlight justify-content-between">
                    <div class="p-2 bd-highlight">
                      <h6>POST A COMMENT</h6>
                    </div>
                    <div class="p-2 bd-highlight">
                      {/* <a href="#bottom">Scroll to Bottom</a> */}
                    </div>
                  </div>

                  <hr
                    style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                  />

                  {this.state.isLoggedIn && (
                    <div class="d-flex bd-highlight">
                      <div class="p-2 bd-highlight">
                        <div
                          className="rounded-circle"
                          width="30px"
                          height="30px"
                          style={{
                            backgroundColor: "rgb(14, 14, 67)",
                            backgroundImage:
                              "url(" + this.state.user.photoURL + ")",
                            backgroundSize: "cover",
                            width: "40px",
                            height: "40px",
                            color: "rgb(14, 14, 67)",
                          }}
                        >
                          &nbsp;
                        </div>
                        {/* <img
                        src={this.state.user.photoURL}
                        class="rounded-circle"
                        width="30px"
                        alt="..."
                      /> */}
                      </div>
                      <div class="p-2 flex-grow-1 bd-highlight">
                        <h6>
                          <b> {this.state.user.displayName} </b>
                          <span onClick={() => auth.signOut()}>( Logout )</span>
                        </h6>
                        {this.state.commentsLoaded && (<NewComment postNewComment={this.postNewComment} />)}

                        {/* {JSON.stringify(this.state.user)} */}
                      </div>
                    </div>

                    // <div className="user">
                    //   <img
                    //     className="photo"
                    //     alt={this.state.user}
                    //     src={this.state.user.photoURL}
                    //   />
                    //   <h5 className="display-name">
                    //     {" "}
                    //     {this.state.user.displayName}{" "}
                    //   </h5>
                    //   <p className="email"> {this.state.user.email} </p>
                    //   <NewComment postNewComment={this.postNewComment} />
                    //   <button
                    //     className="btn btn-outline-secondary"
                    //     onClick={() => auth.signOut()}
                    //   >
                    //     Sign Out
                    //   </button>
                    // </div>
                  )}
                  {!this.state.isLoggedIn && (
                    <div className="signUpPrompt">
                      <div className="p-3">
                        Login to Post a Comment
                        <p
                          className="text-muted text-small"
                          style={{ fontSize: "0.8rem" }}
                        >
                          Login or create an account to join our community
                        </p>
                        <button
                          type="button"
                          class="btn btn-outline-light"
                          onClick={() => this.auth("google")}
                        >
                          <i class="fa fa-google"></i> Login With Google
                        </button>
                      </div>
                    </div>

                    // <div className="alert alert-dark">
                    //   <h1 className="title">ReactJS Comments App</h1>
                    //   <label className="sign-in">Sign in: </label>
                    //   <button
                    //     className="btn btn-danger"
                    //     onClick={() => this.auth("google")}
                    //   >

                    //     google
                    //   </button>
                    // </div>
                  )}

                  <hr
                    style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                  />
                  {this.state.comments === {} ? (
                    ""
                  ) : (
                      <Comments
                        comments={this.state.comments}
                        slug={this.props.match.params.slug}
                        user={this.state.user.uid}
                        name={this.state.user.displayName}
                        login={this.state.isLoggedIn}
                        currentUser={this.state.user}
                      />
                    )}

                  <hr id="bottom"
                    style={{
                      borderTop: "3px solid rgba(115, 110, 110, 0.1)",


                    }}
                  />
                  {/* <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight">
                      <img
                        src="https://yt3.ggpht.com/a/AATXAJygzSqzI_OYRoHsaGr1lphQo46Y2_vi8K-7LUUKCg=s48-c-k-c0xffffffff-no-rj-mo"
                        class="rounded-circle"
                        width="100%"
                        alt="..."
                      />
                    </div>
                    <div class="p-2 flex-grow-1 bd-highlight">
                      <h6 style={{ fontSize: "0.7rem" }}>
                        <b>Nidhin BM</b>
                        <a> 23 Minutes ago</a>
                      </h6>
                      <p style={{ fontSize: "0.8rem" }}>
                        ഒരു ബോറടിയും തോന്നാതെ കണ്ടവർ ആരൊക്കെ ഉണ്ട്?
                      </p>
                    </div>
                  </div> */}
                </div>

                <FeaturedPosts />
                <div class="d-flex flex-column bd-highlight justify-content-end">
                  <div class="p-2 bd-highlight"><a href="#top">Scroll to top</a></div>

                </div>
              </div>
            </div>
          </div>

          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
            <Player
              src={this.state.liveAudio}
              vendor="audio"
              autoPlay="false"
            />
          </div>
          <FlotingPlayPause
            cover={this.state.liveCover}
            title={this.state.liveTitle}
          />
          <BottomNav selected="listen"/>
        </div>
      </Media>
    );
  }
}
export default withMediaProps(episode);
