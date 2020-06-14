import React, { Component } from "react";
import { withMediaProps } from "react-media-player";
import { Media, Player, controls } from "react-media-player";
import CustomPlayPause from "./CustomPlayPause";
const { PlayPause, MuteUnmute, Volume } = controls;

const image =
  "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/6042015/6042015-1591809970938-f637b4b732133.jpg";

class HandleLive extends Component {
  state = {
    imageURL: image,
    title: "Live Radio",
  };

  render() {
    const { className, style, media } = this.props;
    return (
      <>
        <CustomPlayPause
          title={this.state.title}
          imageURL={this.state.imageURL}
        />
      </>
    );
  }
}

export default withMediaProps(HandleLive);
