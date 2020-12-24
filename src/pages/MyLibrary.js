import React, { Component } from "react";
import LogoArea from "./base/LogoArea";
import { Media, Player, controls } from "react-media-player";
import Moment from "moment";
import FlotingPlayPause from "./base/FlotingPlayPause";
import { Helmet } from "react-helmet";
import { auth, providers } from "../utils/FirebaseSettings";
import * as SETTINGS from './constants/Settings';
import RecentlyPlayed from "./homePageComponents/RecentlyPlayed";
// import Skeleton from '@yisheng90/react-loading';
// const settings = require("./API/settings.json");

// let URL = settings.map((settings) => {
//   return settings.streamURL;
// });
// let liveCover = settings.map((settings) => {
//   return settings.liveCover;
// });

export default class MyLibrary extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.postNewComment = this.postNewComment.bind(this);

        this.state = {
            notLoaded: true,
            url: SETTINGS.liveURL,
            cover: SETTINGS.liveCover,
            title: "Live Radios",
            pageTitle: "Loading..",
            hasBanner: false,
            bannerContent: {
                "subOne": "Read",
                "heading": "Magazine Name by Mechanical Department Published",
                "subTwo": ""
                , "link": "p/kettonam"
            },
            hasYoutube: false,
            youtubeLink: "",
            user: {},
            isLoggedIn:false

        };
        // this.refComments = base.syncState("ithaan", {
        //   context: this,
        //   state: "comments"
        // });
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


        };
        this.content = {
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#0b0229",
        };
        this.itemHeading = {
            textAlign: "left",
            fontSize: "10px",
            paddingTop: "15px",
            color: "white",
        }
        this.infobox = {
            backgroundColor: "#0e0e43",
            borderRadius: "5px",
            padding: "30px",
            marginTop: "10px",
        };
    }

    componentDidMount() {
        // axios
        //   .get("https://api.thetkmshow.in/promo/" + this.props.match.params.slug)
        //   .then((response) => {
        //     console.log(response.data)
        //     this.setState({
        //       pageTitle:response.data.title,
        //       notLoaded:false,
        //       listen: response.data,
        //       hasBanner:response.data.hasBanner,
        //       bannerContent:response.data.bannerContent,
        //       hasYoutube:response.data.hasYoutube,
        //       youtubeLink:response.data.youtubeLink
        //     });
        //   })
        //   .catch((error) => {
        //     this.setState({
        //       notLoaded:true,
        //     });
        //     console.log(error);
        //   });
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
    auth(provider) {
        auth.signInWithPopup(providers[provider]);
       
      }
      logout() {
        this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
              window.location = "/library";
    
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
                        <h3 style={{ textAlign: "center" }} className="pt-3 pb-3"> {this.state.isLoggedIn && (this.state.user.displayName + "'s Library")}
                        {!this.state.isLoggedIn && ( "Hi Anonymous!")}
                        </h3>
                        <div className="ml-5 mr-5">
                        {!this.state.isLoggedIn && (
                    <div className="signUpPrompt">
                      <div className="p-3">
                        You are Anonymous!
                        <p
                          className="text-muted text-small"
                          style={{ fontSize: "0.8rem" }}
                        >
                          Login or create an account to join our community and to save your progress
                        </p>
                        <button
                          type="button"
                          class="btn btn-outline-light"
                          onClick={() => this.auth("google")}
                        >
                          <i class="fa fa-google"></i> Login With Google
                        </button>
                        
                      </div>
                      <div className="p-3">
                      {/* <a>Clear My Local Activity</a> */}
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
                        </div> 
                       
                        <div style={this.infobox} className="ml-5 mr-5">
                       
                            <div style={{ marginTop: "30px", paddingBottom: "30px", textAlign: "center" }}>
                                
                                {/* <div class="p-3 mb-4">

                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="p-2 bd-highlight col-example">

                                        </div>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="p-2 bd-highlight col-example">Flex item</div>
                                        <div class="p-2 bd-highlight col-example">Flex item</div>
                                        <div class="p-2 bd-highlight col-example">Flex item</div>
                                    </div>
                                </div> */}
                                <RecentlyPlayed page="library" uid={this.state.user.uid}/>
                            </div>
                        </div>
                         <div className="ml-5 mr-5">
                         <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}}></hr>
                        {this.state.isLoggedIn && (
                    <div className="signUpPrompt">
                      <div className="p-3">
                        Logout
                        <p
                          className="text-muted text-small"
                          style={{ fontSize: "0.8rem" }}
                        >
                          Stay login to be in our community and to save your progress
                        </p>
                        <button
                          type="button"
                          class="btn btn-outline-light"
                          onClick={() => auth.signOut()}
                        >
                         Logout
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
                        </div> 
                        <div style={this.content}>
                            
            <div className="mt-2 mb-3" ></div>

              

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
