import React, { Component } from "react";
import Placehold from "../base/Placehold";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as SETTINGS from "../constants/Settings";
import { Link } from "react-router-dom";
import base, { auth, databased, increment } from "../../utils/FirebaseSettings";
import Moment from "moment";
export default class VoteCard extends Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: "Live Radio",
      voteObj: {},
      scoreGiven: 0,
      isLoggedIn: false,
    };

    this.conatiner = {
      minHeight: "100vh",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: "white",
    };
    this.content = {
      marginLeft: "10%",
      marginRight: "10%",
    };
    this.itemHeading = {
      textAlign: "left",
      fontSize: "10px",
      paddingTop: "15px",
      color: "white",
    };
  }
  componentDidMount() {
    var starCountRef = databased.ref(
      "tedx-votes/" + this.props.participant?.uid + "/" + auth.currentUser?.uid
    );
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ voteObj: snapshot.val() });
      console.table(snapshot.val());
      // console.log(a);
    });
  }

  submitData(event) {
    event.preventDefault();
    console.log(this.state.scoreGiven);
    databased
      .ref(
        "tedx-votes/" +
          this.props.participant?.uid +
          "/" +
          auth.currentUser?.uid
      )
      .set({
        uid: auth.currentUser?.uid,
        name: auth.currentUser?.displayName,
        addedOn: Moment.now(),
        participantId: this.props.participant?.uid,
        participantName: this.props.participant?.name,
        score: increment(parseInt(this.state.scoreGiven)),
      })
      .then(() => {
        alert("Successfully Added");
        databased
          .ref("tedx/" + this.props.participant?.uid)
          .update({
            cumulativeScore: increment(parseInt(this.state.scoreGiven)),
            totalVotes: increment(1),
            averageScore: 0,
          })
          .then(() => {
            alert("Successfully Updated");
          });
      })
      .catch((error) => console.log(error));
  }
  inputData(event) {
    const score = this.refs.score.value;

    this.setState({ scoreGiven: score });
  }
  render() {
    return (
      <div className={"col-12 col-md-4"} key={this.props.participant?.uid}>
        <LazyLoadImage
          effect="blur"
          src={this.props.participant?.photo}
          width="100%"
          height="200px"
          className="roundedImage"
          alt="Poster"
        />
        <p style={this.itemHeading} className="text-truncate">
        {this.props.participant?.slot} - {this.props.participant?.name}
        </p>
        
        {!this.state.voteObj ? (
          <form onSubmit={this.submitData}>
            {auth.currentUser ? (
              <div class="form-group">
                <input
                  type="number"
                  onChange={this.inputData}
                  ref="score"
                  class="form-control"
                  id="name1"
                  min="1"
                  max="100"
                  aria-describedby="button-addon2"
                  placeholder="Enter Score out of 100"
                  required
                />
                <div class="input-group-append mt-3">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                    onClick={this.submitData}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <p> Login to Vote</p>
            )}
          </form>
        ) : (
          <span class="badge badge-success">
            Already Voted {this.state.voteObj?.score || 0} Points
          </span>
        )}
      </div>
    );
  }
}
