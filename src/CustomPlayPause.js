import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import { Media, Player, controls, } from 'react-media-player'
const { PlayPause, MuteUnmute,Volume, } = controls


class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
    
  }
 
 
  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  _muteSound = () => {
    this.props.media.muteUnmute()
  }

  _setStop = () => {
    
    this.props.media.stop()
  }
 
  render() {
    const { className, style, media } = this.props
    return (

        <div className="center">
        <div className="fixed-action-btn toolbar">
          <a className="btn-floating btn-large pulse blue accent-4 waves-effect waves-purple">
            <i className="large material-icons">radio</i>
          </a>
          <ul className="pt-2">
            
            <li className="waves-effect waves-light">
                <button className="btn btn-flat white-text" onClick={this._muteSound}>
                {media.isMuted ? <i className="medium material-icons">volume_down</i> : <i className="medium material-icons white-text">volume_up</i>}
                </button>
            </li>
            <li className="waves-effect waves-light">
                <button className="btn btn-flat white-text" onClick={this._handlePlayPause}>
              {media.isPlaying ? <i className="large material-icons">pause</i> : <i className="large material-icons">play_arrow</i>}
                
                
            </button>
            </li>
            <li className="waves-effect waves-light"><button className="btn btn-flat" onClick={this._setStop}>
            
                <i className="medium material-icons white-text">stop</i>
                </button></li>
          </ul>
        </div>
        </div>





     
    )
  }
}
 
export default withMediaProps(CustomPlayPause)