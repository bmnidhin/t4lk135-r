import React, { Component } from "react";
import LogoArea from "./base/LogoArea";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as SETTINGS from "./constants/Settings";
import GameRankBanner from "./GameComponents/GameRankBanner";
import GameLeaderboardTop from "./GameComponents/GameLeaderboardTop";
import base, { auth, providers, databased } from "../utils/FirebaseSettings";
import GameAllLeaderboard from "./GameComponents/GameAllLeaderboard";

export default class GameListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notLoaded: true,
      user: [],
      isLoggedIn: false,
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
      paddingLeft: "10%",
      paddingRight: "10%",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: "white",
    };
    this.content = {
      marginLeft: "10%",
      marginRight: "10%",
    };
    this.itemHeading = {
      textAlign: "center",
      fontSize: "10px",
      paddingTop: "15px",
      color: "white",
    };
  }

  componentDidMount() {}

  auth(provider) {
    auth.signInWithPopup(providers[provider]);
  }
  logout() {
    this.setState({ isLoggedIn: false, user: {} });
    localStorage.removeItem("userid");
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Games | The TKM Show</title>
          <link rel="canonical" href="https://thetkmshow.in/games" />
        </Helmet>
        <div style={this.conatiner}>
          <LogoArea />

          <div className="mb-5">
            <GameRankBanner />
          </div>
          <div style={this.content}>
            {/* <Adbanner/>   */}
            <div className="row mx-auto d-flex justify-content-center align-items-center">
              <div className={"col-6 col-md-3"}>
                <Link to={"/games/snake"} className="">
                  <img
                    src={
                      "https://i.scdn.co/image/ab67616d00001e02a18d472ffdcb0bff0f00bceb"
                    }
                    width="100%"
                    className="roundedImage"
                    alt="Poster"
                  ></img>
                  <p style={this.itemHeading} className="text-truncate">
                    Snake
                  </p>
                </Link>
              </div>
              <div className={"col-6 col-md-3"}>
                <Link to={"/games/flappy"} className="">
                  <img
                    src={
                      "https://i.scdn.co/image/ab67616d0000b273fb9e3c127c96c101be84f34b"
                    }
                    width="100%"
                    className="roundedImage"
                    alt="Poster"
                  ></img>
                  <p style={this.itemHeading} className="text-truncate">
                    Flappy Bird
                  </p>
                </Link>
              </div>
            </div>
            <div className="mt-4 mb-6" style={{ marginBottom: "150px" }}>
              <div style={{ marginTop: "30px", paddingBottom: "30px" }}>
                <hr
                  style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                />
                <h4 style={{ textAlign: "center" }}>🌎 LeaderBoard - Top 5</h4>
                <hr
                  style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                />
              </div>
              <h5>🐍 Snake</h5>
              <GameAllLeaderboard
                game={"snake"}
                currentUser={this.state.user}
                sliceAt={5}
              />
              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
              <h5>🐦 Flappy Bird</h5>
              <GameAllLeaderboard
                game={"flappy"}
                currentUser={this.state.user}
                sliceAt={5}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
