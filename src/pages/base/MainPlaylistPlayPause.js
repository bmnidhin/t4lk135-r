import React, { Component } from "react";
import {
  Media,
  Player,
  controls,
  withMediaProps,
  utils,
} from "react-media-player";
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

class MainPlaylistPlayPause extends Component {
  style = {
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
  };
  componentDidMount() {}
  render() {
    const { className, style, media } = this.props;
    return (
      <div style={this.style} className={media.isLoading || media.duration == Infinity ? "d-none" : "player"}>
        <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />

        <div className="d-flex flex-row bd-highlight" onClick={this.props.switch}>
          <div className="p-2 bd-highlight">
            <div></div>

            <div>
              <div className={media.isLoading ? "" : "d-none"}>
                <div className="spinner-border text-secondary" role="status"></div>
              </div>
              
            </div>
          </div>
          <div className="p-2 pt-3 bd-highlight text-uppercase">
            {/* {media.duration == Infinity ? "PLAY" : ""}
            {media.isPlaying && media.duration !== Infinity ? "PLAYING" : ""}
            {!media.isPlaying && media.duration !== Infinity? "PAUSED": ""} */}
          </div>
        </div>

        {media.duration == Infinity || media.isLoading ? ("") : (<SeekBar className="custom-range" />)}

        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
          <div className="bd-highlight" style={{ fontSize: "9px" }}>
            {media.duration == Infinity || media.isLoading ? (
              ""
            ) : (
              <CurrentTime />
            )}
          </div>
          <div className="bd-highlight" style={{ fontSize: "9px" }}>
            {media.duration == Infinity || media.isLoading ? "" : <Duration />}
          </div>
        </div>
        <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
      </div>
    );
  }
}
export default withMediaProps(MainPlaylistPlayPause);
