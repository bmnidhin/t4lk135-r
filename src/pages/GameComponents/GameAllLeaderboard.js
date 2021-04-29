import React, { Component } from "react";
import base, { auth, providers, databased } from "../../utils/FirebaseSettings";
import GameOneLeaderboard from "./GameOneLeaderboard";
import Placehold from '../base/Placehold'

export default class GameAllLeaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      user: " ",
      isLoggedIn: false,
      leaderboard: false,
      commentsLoaded: true,
      count:5,
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
  componentDidMount() {
    this.refComments = base.syncState(
      "games/" + this.props.game + "/leaderboard/",
      {
        context: this,

        state: "leaderboard",
      }
    );
    var starCountRef = databased.ref(
      "games/" + this.props.game + "/leaderboard/"
    );
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ count: a });
      // console.log(a);
    });
  }

  renderLeaderboard(key, index, leaderboard, currentUser) {
    return (
      <GameOneLeaderboard
        key={key}
        number={index}
        board={leaderboard}
        currentUser={currentUser}
      />
    );
  }
  render() {
    return (<div>
      {!this.state.leaderboard &&(
          <div
          style={{
            marginTop: "30px",
            paddingBottom: "30px",
            textAlign: "center",
          }}
        >
          <p>
            
            <span className="text-muted">
            <Placehold width='100%' height='25px' loaded={!this.state.leaderboard} />
            <Placehold width='100%' height='25px' loaded={!this.state.leaderboard} />
            <Placehold width='100%' height='25px' loaded={!this.state.leaderboard} />
            </span>
          </p>
        </div>
      )}
       {this.state.count ==0 &&(
          <div
          style={{
            marginTop: "30px",
            paddingBottom: "30px",
            textAlign: "center",
          }}
        >
          <p>
            
            <span className="text-muted">
              LeaderBoard Empty
            </span>
          </p>
        </div>
      )}
      <div style={{ maxWidth: "100%", marginBottom:"50px" }}>
        {Object.keys(this.state.leaderboard)

          .sort((b, a) => a.time - b.time)

          .reverse()
          .slice(0, this.props.sliceAt || 50)
          .map((key, index) =>
            this.renderLeaderboard(
              key,
              index + 1,
              this.state.leaderboard[key],
              this.props.currentUser
            )
          )}
      </div>
      </div>
    );
  }
}
