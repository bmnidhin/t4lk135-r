import React, { Component } from "react";
import ReactGA from 'react-ga';
import base, { auth, providers, databased } from '../../utils/FirebaseSettings'
import {
  Media,
  Player,
  controls,
  withMediaProps,
  utils,
} from "react-media-player";

import CustomtCurrentTime from "./CustomtCurrentTime";
import { myLog } from "../../packages/logger/Logger";

const { formatTime } = utils;

const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls;

class FlotingPlayPause extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: "Live Radio",
      publishedAtDate: "",
      user: "",
      isLoggedIn: false,
      CurrentTime: "",
    };
  }
  
  componentDidMount(){
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
    ReactGA.initialize('UA-168458070-1');

    ReactGA.event({
      category: 'Floting Player',
      action: 'Player Started',
      label: this.props.title,
      nonInteraction: true,}) 
  
  }

  componentDidUpdate({media}){
    myLog(this.state.isLoggedIn, 
      this.state.user.displayName,
      this.state.user.userId,
      "Loaded Player - " + this.props.title,
      "Update",
      
       )
    
       ReactGA.event({
        category: 'Floting Player',
        action: 'Player Started',
        label: this.props.title,
        nonInteraction: true,}) 
    
    
  }
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
    
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
    {this.props.media.isPlaying? localStorage.setItem('autoplay', false) :localStorage.setItem('autoplay', true)}
    ReactGA.initialize('UA-168458070-1');

    ReactGA.event({
      category: 'Floting Player',
      action: 'Play Pause',
      label: this.props.title,
      nonInteraction: true
    });
  };

  style = {
    position: "fixed",
    bottom: "50px",
    right: "0px",
    left: "0px",
    zIndex: "999999",
    cursor: "pointer",
    backgroundColor: "white",
    height: "75px",
    width: "100%",
//     boxShadow: "#0a0a0a 0px -1px 11px 0px"
  };
  
  render() {
    const { className, style, media } = this.props;
    return (
      <Media>
      <div style={this.style}>
        <table className="table table-bordered" style={{ marginBottom: 0 }}>
          <tbody>
            <tr>
              <td width="50px">
                <img
                  src={this.props.cover}
                  width="50px"
                  className="roundedImage"
                ></img>
              </td>
              <td className="align-middle">
                <div
                  className="text-truncate"
                  style={{ width: "190px", fontSize: "15px" }}
                >
                  {this.props.title}
                </div>

                <span style={{ fontSize: "8px", textAlign: "left" }}>
                 
                  {/* {media.duration==Infinity || media.isLoading ? '' : formatTime(media.currentTime) + " / " + formatTime(media.duration)} */}
                </span>
              </td>

              <td
                className="align-middle text-center"
                width="150px"
                onClick={this._handlePlayPause}
              >
                {/* <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div> */}
                <div>
                  {/* <div className={media.isLoading && (media.duration !==Infinity) ? '' : 'd-none'}>
                    <div className="spinner-border text-secondary" role="status"></div>
                    </div> */}
                  <div className={""}>
                    {media.isPlaying ? (
                      <span className="material-icons">pause_circle_filled</span>
                    ) : (
                      <span className="material-icons ">
                        play_circle_filled
                      </span>
                    )}
                  </div>
                </div>

                {/*  */}
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="row">
          <div className="col-1 roundedImage flotingImage">
            {" "}
            <img src={this.state.imageURL} width="50px"></img>
          </div>
          <div className="col-6 flotingTitle text-truncate">col-sm-4</div>
          <div className="col-5 flotingTitle">col-sm-4</div>
        </div> */}
      </div>
      </Media>
    );
  }
}

export default withMediaProps(FlotingPlayPause);
