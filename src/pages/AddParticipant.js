import React, { Component } from "react";
import LogoArea from "./base/LogoArea";
import { Media, Player, controls } from "react-media-player";
import Moment from "moment";
import FlotingPlayPause from "./base/FlotingPlayPause";
import { Helmet } from "react-helmet";
import {
  auth,
  providers,
  databased,
  storageRef,
} from "../utils/FirebaseSettings";
import * as SETTINGS from "./constants/Settings";
import RecentlyPlayed from "./homePageComponents/RecentlyPlayed";
import BottomNav from "./base/BottomNav";
import VotingPage from "./tedx/VotingPage";
const uuid = require("uuid");

export default class AddParticipant extends Component {
  constructor(props) {
    super(props);
    // this.onChangeUsername = this.onChangeUsername.bind(this)
    // this.postNewComment = this.postNewComment.bind(this);
    this.submitData = this.submitData.bind(this);
    this.inputData = this.inputData.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: "Live Radios",
      pageTitle: "Loading..",
      hasBanner: false,
      bannerContent: {
        subOne: "Read",
        heading: "Magazine Name by Mechanical Department Published",
        subTwo: "",
        link: "p/kettonam",
      },
      hasYoutube: false,
      youtubeLink: "",
      user: {},
      isLoggedIn: false,
      uploading: false,
      percent: 0,
      file: "",
      error: "",
      downloadURL: "",
      uid: uuid.v1(),
      name: "",
      branch: "",
      year: "",
      slot: "",
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
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: "white",
    };
    this.content = {
      marginLeft: "10%",
      marginRight: "10%",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
    };
    this.itemHeading = {
      textAlign: "left",
      fontSize: "10px",
      paddingTop: "15px",
      color: "white",
    };
    this.infobox = {
      backgroundColor: SETTINGS.COLOURS.BRAND_BG,
      borderRadius: "5px",
      padding: "30px",
      marginTop: "10px",
    };
  }

  submitData(event) {
    event.preventDefault();
    // console.table({
    //   name: this.state.name,
    //   branch: this.state.branch,
    //   year: this.state.year,
    //   slot: this.state.slot,
    //   photo: this.state.downloadURL,
    //   addedBy: auth.currentUser.displayName,
    //   addedOn: Moment().format("DD-MM-YYYY"),
    //   cumulativeScore: 0,
    //   totalVotes: 0,
    //   averageScore: 0,
    // })
    databased
      .ref(`tedx-greenroom/${this.state.uid}`)
      .set({
        uid: this.state.uid,
        name: this.state.name,
        branch: this.state.branch,
        year: this.state.year,
        slot: this.state.slot,
        photo: this.state.downloadURL,
        addedBy: auth.currentUser.displayName,
        addedOn: Moment().format("DD-MM-YYYY"),
        cumulativeScore: 0,
        totalVotes: 0,
        averageScore: 0,
        onstage: false,
      })
      .then(() => {
        alert("Successfully Added");
        this.setState({
          percent: 0,
          file: "",
          error: "",
          downloadURL: "",
          uid: uuid.v1(),
          name: "",
          branch: "",
          year: "",
          slot: "",
        });
      })
      .catch((error) => console.log(error));
  }
  inputData(event) {
    const name = this.refs.name1.value;
    const branch = this.refs.branch.value;
    const year = this.refs.year.value;
    const slot = this.refs.slot.value;

    this.setState({ name, branch, year, slot });
  }
  handleFileSelect(e) {
    this.setState({ file: e.target.files[0] });
    this.handleFileUpload(e.target.files[0]);
  }

  handleFileUpload(file) {
    this.setState({ uploading: true });
    let ref = storageRef.child("images/" + this.state.uid + Moment.now());
    var uploadTask = ref.put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ percent: percent });
        console.log("Upload is " + percent + "% done");
      },
      function (error) {
        alert("Upload Failed \n" + error);
      },
      (task) => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        ref.getDownloadURL().then((url) => {
          this.setState({ downloadURL: url, uploading: false });
          console.log(url);
          alert("Upload Successful");
        });
      }
    );
  }
  componentDidMount() {}

  auth(provider) {
    auth.signInWithPopup(providers[provider]);
  }
  logout() {
    this.setState({ isLoggedIn: false, user: {} });
    localStorage.removeItem("userid");
    window.location = "/vote";
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Paticipant | The TKM Show</title>
          <link rel="canonical" href="https://thetkmshow.in/listen" />
        </Helmet>
        <div style={this.conatiner}>
          <LogoArea />
          <h3 style={{ textAlign: "center" }} className="pt-3 pb-3">
            {"TalenTEDx Add participant"}
          </h3>
          {JSON.stringify(this.state.firstName)}
          <div className="ml-5 mr-5">
            {!this.state.isLoggedIn && (
              <div className="signUpPrompt">
                <div className="p-3">
                  You are Anonymous!
                  <p
                    className="text-muted text-small"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Login or create an account to vote your favorite candidate.
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-light"
                    onClick={() => this.auth("google")}
                  >
                    <i class="fa fa-google"></i> Login With Google
                  </button>
                </div>
                <div className="p-3"></div>
              </div>

              // </div>
            )}
          </div>

          <div className="ml-5 mr-5">
            <hr
              style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
            ></hr>
            {this.state.isLoggedIn && (
              <div className="signUpPrompt">
                <div className="p-3">
                  <form onSubmit={this.submitData}>
                    <div class="form-group">
                      <label for="name1">
                        Participant / Group Captian Name
                      </label>
                      <input
                        type="text"
                        onChange={this.inputData}
                        ref="name1"
                        class="form-control"
                        id="name1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="name1">Slot</label>
                      <input
                        type="number"
                        onChange={this.inputData}
                        ref="slot"
                        class="form-control"
                        id="slot"
                        aria-describedby="emailHelp"
                        placeholder="Enter Slot of the participant"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Year</label>
                      <select
                        class="form-control"
                        id="yearselect"
                        onChange={this.inputData}
                        ref="year"
                        required
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Branch</label>
                      <select
                        class="form-control"
                        id="branchselect"
                        onChange={this.inputData}
                        ref="branch"
                        required
                      >
                        <option>ARCH</option>
                        <option>CS</option>
                        <option>CHEM</option>
                        <option>CIVIL</option>
                        <option>EC</option>
                        <option>EEE</option>
                        <option>MECH</option>
                        <option>MTECH / MCA</option>
                      </select>
                    </div>
                    <div class="form-row">
                      <div class="col">
                        <div class="form-group">
                          <label for="exampleFormControlFile1">
                            Particiapnt / Group Captian Photo
                          </label>
                          <input
                            type="file"
                            onChange={this.handleFileSelect}
                            accept="image/*"
                            class="form-control-file"
                            id="exampleFormControlFile1"
                            required
                          />
                        </div>
                      </div>
                      {/* <div class="col">
                        <button
                          type="button"
                          class="btn btn-outline-light"
                          onClick={() => this.handleFileUpload()}
                        >
                          Upload
                        </button>
                      </div> */}
                    </div>

                    {this.state.uploading ? (
                      <div>
                        <div className="load-bar" />
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: `${this.state.percent}%` }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Uploading{" "}
                          </div>
                          <br />
                          <br />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <button
                      type="submit"
                      class="btn btn-primary"
                      disabled={!this.state.downloadURL}
                      style={{ marginTop: 30 }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div style={this.content}>
            <div className="mt-2 mb-3"></div>

            <div className="mt-2 mb-3"></div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
}
