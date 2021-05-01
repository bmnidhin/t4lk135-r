import React, { Component } from "react";
import { auth, providers } from "../../utils/FirebaseSettings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import ProfilePhoto from "./ProfilePhoto";
export default class UserPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
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

  auth(provider) {
    auth.signInWithPopup(providers[provider]);
  }
  logout() {
    auth.signOut();
    localStorage.removeItem("userid");
  }
  render() {
    if (this.state.isLoggedIn) {
      localStorage.setItem("userid", this.state.user.uid);
    }
    return (
      <div>
        {this.state.isLoggedIn && (
          <ProfilePhoto
            alt={this.state.user.displayName}
            src={this.state.user.photoURL}
            logout={this.logout}
          />
        )}
        {!this.state.isLoggedIn && (
          <span type="button" onClick={() => this.auth("google")}>
            SIGNIN
          </span>
        )}
      </div>
    );
  }
}
