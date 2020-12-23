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

class Status extends Component {
    constructor(props) {
        super(props);
       this.state ={
            progress :"",
        }
           
    }
 
  style = {
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
  };
  componentDidMount() {
    
  }
  componentDidUpdate(){
 
   
  }
  render() {
    const { className, style, media } = this.props;
    
    return (
        <Media>
         <p>
            Now Playing : {this.props.title} <br/>
            Auth : {this.props.auth?"true":"False"} <br/>
            Slug : {this.props.slug} <br/>
            Name : {this.props.name} <br/>
            UID : {this.props.id} <br/>
            Duration: {media.duration} <br/>
            CurrentTime: {media.currentTime} <br/>
            Autoplay:{localStorage.getItem("autoplay")} <br/>
         </p>
         </Media>
    );
  }
}
export default withMediaProps(Status);
