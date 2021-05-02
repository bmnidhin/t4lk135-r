import React, { Component } from "react";
import Playtkmquiz from "../GameComponents/tkmquiz/Playtkmquiz";
import base, { auth, providers, databased } from "../../utils/FirebaseSettings";
import { AvatarGenerator } from "random-avatar-generator";



let qs = require("qs");



const generateUsername = require("generate-username-from-email");
export default class PlaytkmquizMainPage extends Component {
  constructor(props) {
    super(props);
    this.postGameScore = this.postGameScore.bind(this);
    this.postGameAttempt = this.postGameAttempt.bind(this);
    this.state = {
      user: " ",
      isLoggedIn: false,
      leaderboard: {},
      commentsLoaded: true,
      randomAvathar: localStorage.getItem("avathar"),
      userName: "",
    };
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        // console.log("------------------------------------");
        // console.log(user);
        localStorage.setItem("userid", this.state.user.uid);
        localStorage.setItem('displayName',this.state.user.displayName);
        localStorage.setItem('photoURL',this.state.user.photoURL);
        localStorage.setItem('email',this.state.user.email);

      } else {
        this.setState({ isLoggedIn: false, user: {} });
        localStorage.removeItem("userid");
      }
    });
  }
  componentDidMount() {
    let play = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).play;

    if (play != 4033853) {
      window.location = "/games/tkmquiz?error=500";
    }
    // if (!this.state.isLoggedIn) {
    //   window.location = "/games/tkmquiz?error=500";
    // }
    this.refComments = base.syncState("games/tkmquiz/leaderboard/", {
      context: this,

      state: "leaderboard",
    });
    var starCountRef = databased.ref("games/tkmquiz/leaderboard/");
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ commentsLoaded: true });
      // console.log(a);
    });
    if (!localStorage.getItem("avathar")) {
      const generator = new AvatarGenerator();
      const newAvathar = generator.generateRandomAvatar();
      localStorage.setItem("avathar", newAvathar);

      this.setState({
        randomAvathar: localStorage.getItem("avathar"),
      });
    }
  
  }
  postGameScore(score) {
    let d = new Date();
    if (!this.state.user.uid) {
      alert("Unable to Connect With Server. Try Again!!!");
    } else {
      let data = {
        game: "tkmquiz",
        score: score,
        uid: this.state.user.uid,
        name: this.state.user.displayName,
        time: d.getTime(),
        photo: this.state.user.photoURL,
        avathar: this.state.randomAvathar,
        userName: generateUsername(this.state.user.email),
      };

      databased.ref("games/tkmquiz/leaderboard/" + this.state.user.uid).set(data);

      // this.setState({
      //   comments: comments,

      // });
    }
  }
  postGameAttempt(score) {
    let d = new Date();
    if (!this.state.user.uid) {
      alert("Unable to Connect With Server. Try Again!!!");
    } else {
      let data = {
        game: "tkmquiz",
        score: score,
        uid: this.state.user.uid,
        name: this.state.user.displayName,
        time: d.getTime(),
        photo: this.state.user.photoURL,
      };

      databased.ref("games/tkmquiz/attempts/" + this.state.user.uid).set(data);

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

  render() {
    let play = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).play;
    return (
      play == 4033853 &&(
        <div style={{ maxWidth: "100%" }}>
       
        {this.state.isLoggedIn && <Playtkmquiz
          postGameScore={this.postGameScore}
          postGameAttempt={this.postGameAttempt}
          isLoggedIn={this.state.isLoggedIn}
          username={ generateUsername(this.state.user.email || "noname@gmail.com")}
          avathar={this.state.randomAvathar}
        />}
      </div>
      )
   
    );
  }
}
