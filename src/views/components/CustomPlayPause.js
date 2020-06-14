import React, { Component } from "react";
import { withMediaProps } from "react-media-player";
import { Media, Player, controls } from "react-media-player";
const { PlayPause, MuteUnmute, Volume } = controls;

const image =
  "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/6042015/6042015-1591809970938-f637b4b732133.jpg";

class CustomPlayPause extends Component {
  state = {
    imageURL: image,
  };
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
  };

  _muteSound = () => {
    this.props.media.muteUnmute();
  };

  _setStop = () => {
    this.props.media.stop();
  };

  render() {
    const { className, style, media } = this.props;
    return (
      <div className="center">
        <div className="fixed-action-btn toolbar">
          <a className="btn-floating btn-large pulse blue accent-4 waves-effect waves-purple">
            <i className="large material-icons">radio</i>
          </a>
          <ul className="pt-2">
            <li className="waves-effect waves-light">
              <button
                className="btn btn-flat white-text"
                onClick={this._muteSound}
              >
                {media.isMuted ? (
                  <i className="medium material-icons">volume_down</i>
                ) : (
                  <i className="medium material-icons white-text">
                    volume_down
                  </i>
                )}
              </button>
            </li>
            <li className="waves-effect waves-light">
              <button
                className="btn btn-flat white-text"
                onClick={this._handlePlayPause}
              >
                {media.isPlaying ? (
                  <i className="large material-icons">pause</i>
                ) : (
                  <i className="large material-icons">play_arrow</i>
                )}
              </button>
            </li>
            <li className="waves-effect waves-light">
              <button className="btn btn-flat" onClick={this._setStop}>
                <i className="medium material-icons white-text">stop</i>
              </button>
            </li>
          </ul>
          {/* <ul className="pt-2">
          <div class="row player">
            <div class="col s1">

             <div className="playerimage">
              <img src={this.props.imageURL}  height="50px" className="nbm-poster" alt="poster"></img>
              </div>
           
            </div>
            <div class="col s7 left-align nowplaying" style={{paddingLeft:45,paddingTop:2}}>
              
              <h6 style={{marginBottom:"-2px"}}className="truncate">{this.props.title} </h6><span className="currentimeInner">12.6 / 15.7</span> 
            </div>
            
            <div class="col s2"style={{paddingRight:0,paddingTop:4}}>
               
            <button className="btn btn-flat white-text" onClick={this._handlePlayPause}>
              {media.isPlaying ? <i className="large material-icons">pause</i> : <i className="large material-icons">play_arrow</i>}
                
                
            </button>
            
              </div>
     
            </div>
       
            
          </ul> */}
        </div>
      </div>
    );
  }
}

export default withMediaProps(CustomPlayPause);
