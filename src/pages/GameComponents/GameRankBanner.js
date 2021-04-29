// Displays a Rank banner else a sigin button
import React, { Component } from "react";
import base, { auth, providers, databased } from "../../utils/FirebaseSettings";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const generateUsername = require("generate-username-from-email");
export default class GameRankBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notLoaded: true,
      user: [],
      isLoggedIn: false,
      snakeScore: 0,
      flappyScore: 0,
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
        {this.state.isLoggedIn && (
          <div
            style={{
              marginTop: "30px",
              paddingBottom: "30px",
              textAlign: "center",
              width:'100%'
            }}
          >
            <h3 style={{}}>
              Hi {generateUsername(this.state.user.email || "noname@gmail.com")}
            </h3>
            <p>
              Score:{" "}
              <span className="text-muted">
                🐍 Snake: {localStorage.getItem("snakeHighScore") || 0}, 🐦
                FlappyBird: {localStorage.getItem("flappyHighScore") || 0}
              </span>
            </p>
          </div>
        )}
        {!this.state.isLoggedIn && (
          <div className="signUpPrompt">
            <div className="p-3">
            🚨 Account Needed!
              <p
                className="text-muted text-small"
                style={{ fontSize: "0.8rem" }}
              >
                Login or create an account to play games
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.auth("google")}
                startIcon={<AccountCircleIcon />}
              >
                Login With Google
              </Button>
            </div>
            <div className="p-3"></div>
          </div>

          // </div>
        )}
      </div>
    );
  }
}
