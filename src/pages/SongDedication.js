import React, { Component } from "react";
// import NowPlaying from "./base/NowPlaying";
import {
  Media,
  Player,
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
import Status from "../utils/Status";
import BottomNav from "./base/BottomNav";
import FeaturedRandom from "./homePageComponents/FeaturedRandom";
import PostDedication from "./Firebase/PostDedication";
import Dedications from "./Firebase/Dedications";
import { AvatarGenerator } from 'random-avatar-generator';
import Popup from 'react-popup';
let qs = require('qs');


class SongDedication extends Component {
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
      commentsLoaded: false,
      randomAvathar: "",
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
    
    this.refComments = base.syncState("song-dedication", {
      context: this,

      state: "comments",
    });
    var starCountRef = databased.ref("song-dedication");
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ commentsLoaded: true });
      // console.log(a);
    });
    const generator = new AvatarGenerator();
    this.setState({
        randomAvathar:generator.generateRandomAvatar(),
    
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
    this.setState({
      isEventNoPublishedBannerVisible: isEventPublished,
    });
  }

  postNewComment(comment) {
    const timePublished = Date.now();
    if (false) {
      alert("Unable to Post Comment. Try Again!!!");
    } else {
      comment.user = {
        uid: this.state.user.uid ||"anonymous",
        name: this.state.user.displayName||"anonymous",
        time: timePublished,
        photo: this.state.randomAvathar ||"anonymous",

      };
      const comments = {
        ...this.state.comments
      };


      const timestamp = Date.now();
      comments[`comm-${timestamp}`] = comment;

      databased.ref("song-dedication").set(comments);
      alert('Your dedication is recorded. It will be pulblished at 7PM 14 feb 2021 ❤️😊')

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
    let admin = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).admin
    let form = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).form
    return (
      <Media>
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
         
          <div style={this.content} id="top"className="pt-4 mb-4">
            <div  style={{
            backgroundColor: "rgb(14, 14, 67)",
            backgroundImage:
              "url(" + "https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" + ")",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            
          }}>
               <div style={this.infobox} className="pt-4 mb-4" style={{
            backgroundColor: "rgba(18,30,40,0.9)",
            width: "100%",
            height: "100%",
            
          }}>
          <div className="p-3 text-center">
                <h3>Anonymous Song Dedication ❤️😊</h3>
              <p className="text-muted">Name Your favorite song and your Valentine you wanna dedicate this to.</p>
              <p className="text-muted">👤Your name wont be revealed to anyone </p>
            </div>
            </div>

            </div>
         
            <div style={this.secondaryContent}>
              <div style={this.secondaryContentInner}>
                <div className="commentArea">
                  {/* <Adbanner /> */}
                

                  {form !=300 &&(
                         <div className="p-3 text-center">
                         <p className="text-muted">Sorry! We are no longer accepting responses</p>

                       </div>
                      )}
                  {true && (
                    <div class="d-flex bd-highlight">
                  
                     
                      
                       
                        {form ==300  && (
                          <>
                              <div class="p-2 bd-highlight">
                        <div
                          className="rounded-circle"
                          width="30px"
                          height="30px"
                          style={{
                            backgroundColor: "rgb(14, 14, 67)",
                            backgroundImage:
                              "url(" + this.state.randomAvathar + ")",
                            backgroundSize: "cover",
                            width: "40px",
                            height: "40px",
                            color: "rgb(14, 14, 67)",
                          }}
                        >
                          &nbsp;
                        </div>
                       
                      </div>
                           <div class="p-2 flex-grow-1 bd-highlight">
                           <h6>
                           <b> Favorite song - Valentine's Name </b>
                           <p className="text-muted pt-2 text-small">
                              Eg <i>'Humsafar' - Badrinath Ki Dulhania - Govindan - 3rd year EC</i>
                           </p>
                         
                         </h6>
                          {this.state.commentsLoaded && (<PostDedication postNewComment={this.postNewComment} />)}
                          </div>
                          </>
                        )}
                       

                        {/* {JSON.stringify(this.state.user)} */}
                     
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
                  

                  <hr
                    style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                  />
                  {this.state.comments === {} ? (
                    ""
                  ) : (
                     
                      <Dedications
                      isAdmin = {admin == 4462? true: false}
                      comments={this.state.comments}
                      slug={"song-dedication"}
                      user={this.state.user.uid||"anonymous"}
                      name={this.state.user.displayName ||"anonymous"}
                      login={this.state.isLoggedIn ||"anonymous"}
                      currentUser={this.state.user ||"anonymous"}
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

                <FeaturedRandom/>
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
export default withMediaProps(SongDedication);
