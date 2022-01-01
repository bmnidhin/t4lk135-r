import React, { Component } from "react";
import Placehold from "../base/Placehold";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as SETTINGS from "../constants/Settings";
import { Link } from "react-router-dom";
import base, { auth, databased, increment } from "../../utils/FirebaseSettings";
import Moment from "moment";
export default class AdminCard extends Component {
  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    // this.inputData = this.inputData.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: "Live Radio",
      voteObj: {},
      greenRoom:{},
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
    //is perfomed?  
    var starCountRef = databased.ref(
      "tedx/" + this.props.participant?.uid 
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
    databased
      .ref(
        "tedx/" +
          this.props.participant?.uid 
      )
      .set({
        uid:  this.props.participant?.uid,
        name:  this.props.participant?.name,
        branch:  this.props.participant?.branch,
        year:  this.props.participant?.year,
        slot:  this.props.participant?.slot,
        photo:  this.props.participant?.photo,
        addedBy:  this.props.participant?.addedBy,
        addedOn:  this.props.participant?.addedOn,
        cumulativeScore: 0,
        totalVotes: 0,
        averageScore: 0,
        onstage: true,
      })
      .catch((error) => console.log(error));
  }
//   inputData(event) {
//     const score = this.refs.score.value;

//     this.setState({ scoreGiven: score });
//   }
  render() {
    return (
      <div className={"col-12 col-md-4"} key={this.props.participant?.uid}>
        <LazyLoadImage
          effect="blur"
          src={this.props.participant?.photo}
          width="100%"
          className="roundedImage"
          alt="Poster"
        />
        <p style={this.itemHeading} className="text-truncate">
        {this.props.participant?.slot} - {this.props.participant?.name}
        </p>
        <p style={this.itemHeading} className="text-truncate">
       
       Total Score : {this.state.voteObj?.cumulativeScore || 0} &nbsp;&nbsp;&nbsp;
           Total Votes : {this.state.voteObj?.totalVotes ||0}
           <br/>
           Average Score : {parseInt(this.state.voteObj?.cumulativeScore ||0)/ parseInt(this.state.voteObj?.totalVotes ||1)}
       
   </p>
        {!this.state.voteObj ? (
            <>
           
          <form onSubmit={this.submitData}>
            {auth.currentUser ? (
              <div class="form-group">
                <div class="input-group-append mt-3">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    type="button"
                    id="button-addon2"
                    onClick={this.submitData}
                  >
                    Promote to Stage
                  </button>
                </div>
              </div>
            ) : (
              <p> Signin to change</p>
            )}
          </form>
          </>
        ) : (

          <span class="badge badge-success">
           Promoted to Stage

          </span>
        )}
        
      </div>
    );
  }
}
