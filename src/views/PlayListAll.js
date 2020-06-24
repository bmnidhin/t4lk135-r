import React, { useState } from "react";
// import sections

import { Media, Player, controls } from "react-media-player";
import CustomPlayPause from "./components/CustomPlayPause";
import PodPlayer from "./components/PodPlayer";
import Navbar from "./components/Navbar";
import Herotext from "./components/Herotext";
import Footer from "./components/Footer";
import RecentPosters from "./components/RecentPosters";
import { Helmet } from "react-helmet";
import ListenAgain from "./components/ListenAgain";
import ListenPlayListAgain from "./components/ListenPlayListAgain";
import Notifications from "./components/Notifications";
const settings = require("./API/settings.json");

let URL = settings.map((settings) => {
  return settings.streamURL;
});

let streamURL = URL;
const podtitle = "Stay Tuned..! Trial Episode";
const duration = "12 Min";
const art =
  "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/6042015/6042015-1591172558348-8d8b77870bd83.jpg";
const writeup =
  "One of the architects behind Hestia'19, The Ex G-Sec and a name familiar to the majority of TKMians, in our first episode 'Ormayundo ee mugham?' we bring to you TKM's very own Aswin P S.";
const { CurrentTime, Progress, SeekBar, Duration } = controls;

const PlayListAll = () => {
  const [stream, podcast] = useState(streamURL);
  const [streamControlls, PodcastControlls] = useState("hide");
  const [hideinfo, ShowInfo] = useState("show");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Listen | The TKM Show</title>
        <link
          rel="canonical"
          href="https://thetkmshow.in/orma-undo-ee-mugham"
        />
      </Helmet>
      <div className="App">
        <Notifications />

        <Media>
          <div className="media">
            <div className="media-controls">
              <header
                className="App-header"
                style={{
                  // backgroundImage:  "url(" + Background + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                }}
              >
                <Navbar />
                {/* <h2>Listen</h2> */}
                {/* <Herotext/> */}

                <ListenPlayListAgain />
              </header>
              <div className="section-center">{/* <RecentPosters/> */}</div>

              <Player src={stream} autoPlay="true" vendor="audio" />
            </div>
            <div className="media-controls">
              <CustomPlayPause />
            </div>
          </div>
        </Media>
        <Footer />
      </div>
    </>
  );
};

export default PlayListAll;
