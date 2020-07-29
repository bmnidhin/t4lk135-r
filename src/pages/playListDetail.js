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
import NewComment from './Firebase/NewComment'
import Comments from './Firebase/Comments'
import base, { auth, providers, databased } from '../utils/FirebaseSettings'
import LoveSong from "./Firebase/LoveSong";
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
    this.postNewComment = this.postNewComment.bind(this);

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
      comments: {},
      isLoggedIn: false,
      numberOfComments:0,
      user: " "
    };
    this.refComments = base.syncState( this.props.match.params.slug, {
      context: this,
      
      state: "comments",
    });
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        console.log("------------------------------------");
        console.log(user);
      } else {
        this.setState({ isLoggedIn: false, user: {} });
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
  postNewComment(comment) {
    const timePublished = Date.now();
     if (this.state.user.uid ===''|| this.state.user.displayName==='' || this.state.user.photoURL ===''  ) {
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
       
       databased.ref(this.props.match.params.slug).set(comments);
     
 
       // this.setState({
       //   comments: comments,
         
       // });
     }
    
     
   }
   auth(provider) {
     auth.signInWithPopup(providers[provider]);
   } 
   logout(){
     this.setState({ isLoggedIn: false, user: {} });
 
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
          
          style={{
            // fontWeight: item.title === this.state.selectedTrack && "bold",
            fontWeight: item.id === this.state.selectedTrack && "bold",
            // color: item.id === this.state.selectedTrack && "green",
            backgroundColor:
              item.id === this.state.selectedTrack && "rgba(44, 40, 174, 0.44)",
          }}
        >
          <th scope="row" onClick={() =>
            this.setState({
              selectedTrack: item.id,
              liveAudio: item.audio,
              liveCover: this.state.cover,
              liveTitle: item.title,
            })
          }>{item.id}</th>
          <td style={{ fontSize: "1rem" }}
          onClick={() =>
            this.setState({
              selectedTrack: item.id,
              liveAudio: item.audio,
              liveCover: this.state.cover,
              liveTitle: item.title,
            })
          }
          >{item.title}
        <br/><span className="text-muted"style={{ fontSize: "0.6rem" }}>
        {item.duration}
          </span>
          </td>
          <td className="text-center"><LoveSong 
          userid={this.state.user.uid}
          username ={this.state.user.displayName}
          slug={this.props.match.params.slug}
          songId={item.id}
          google={() => this.auth("google")}
          /> </td>
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
                <div class="col-sm-2">
                  <img
                    src={this.state.cover}
                    width="100%"
                    className="roundedImage"
                    alt="Poster"
                  ></img>
                </div>
                <div class="col-sm-10">
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
              <div className="pt-4 pb-4 pl-2 pr-2">
                <table
                  class="table table-dark"
                  style={{ backgroundColor: "#03022900", cursor: "pointer" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col text-right"></th>
                    </tr>
                  </thead>
                  <tbody>{list}</tbody>
                 
                </table>
              </div>
            </div>
            <div style={this.secondaryContent}>
              <div style={this.secondaryContentInner}>
              <div className="commentArea">
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
                        <NewComment postNewComment={this.postNewComment} />
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

                  <hr  id="bottom"
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