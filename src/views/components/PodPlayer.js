import React, { Component } from "react";
import { withMediaProps, utils } from 'react-media-player'

import LoadingStatus from "./LoadingStatus";
import { Media, Player, controls } from "react-media-player";

const { formatTime } = utils
const { PlayPause, MuteUnmute, Volume, SeekBar } = controls;

// const { formatTime } = utils

class PodPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 60,
    };
  }
  shouldComponentUpdate({ media }) {
    return this.props.media.currentTime !== media.currentTime;
  }
  render() {
    const { className, style, media } = this.props;

    let duration = media.duration;
    let currentTime = media.currentTime;
    let percentage = (currentTime / duration) * 100;
    
  
    return (
      <Media>
        <div class="row Podplayer">
          <div class="col s12 m3">
            <div min-width="100%" height="">
              <img
                src={this.props.art}
                width="100%"
                className="nbm-poster z-depth-3"
                alt={this.props.alt}
              ></img>
            </div>
          </div>

          <div class="col s12 m8">
            <LoadingStatus />
            <div className="left-align  asd">
              <h4>{this.props.podtitle}</h4>
              <p className="podpara">{this.props.writeup}</p>
              <p>{media.duration==Infinity || media.isLoading ? '' : formatTime(media.currentTime) + " / " + formatTime(media.duration)}</p>
             

                {media.duration==Infinity || media.isLoading ? '' : <SeekBar />}
                  
            </div>
          </div>
        </div>
        </Media>
    );
  }
}

export default PodPlayer;
