import React, { Component } from "react";

import {
  Media,
  Player,
  controls,
  withMediaProps,
  utils,
} from "react-media-player";
import CustomtCurrentTime from "./CustomtCurrentTime";

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
    };
  }

  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };
  style = {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    left: "0px",
    zIndex: "999",
    cursor: "pointer",
    backgroundColor: "white",
    height: "70px",
    width: "100%",
  };

  render() {
    const { className, style, media } = this.props;
    return (
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
                  {/* <CurrentTime/> / <Duration/> */}
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
    );
  }
}

export default withMediaProps(FlotingPlayPause);
