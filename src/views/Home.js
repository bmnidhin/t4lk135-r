import React from "react";
// import sections

import { Helmet } from "react-helmet";
import { Media, Player } from "react-media-player";
import Navbar from "./components/Navbar";
import Herotext from "./components/Herotext";
import Footer from "./components/Footer";

import RecentPosters from "./components/RecentPosters";
import PromoBanner from "./components/PromoBanner";
import ListenPlayListAgain from "./components/ListenPlayListAgain";
import Notifications from "./components/Notifications";
import CatchAgain from "./components/CatchAgain";
import HandleLive from "./components/HandleLive";
import ListenAgain from "./components/ListenAgain";

const Background = require("./img/wave.jpg");

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The TKM Show</title>
        <meta name="description" content="Home of TKM's very own podcast. Here we bring you everything from alumni interviews, interactive sessions and a platform for voices of TKM to reign free."/>
        <link rel="canonical" href="https://thetkmshow.in" />
      </Helmet>

      <div className="App">
        {/* render a notification bar for countdown or custom notification
       controlled by views/api/notification.json */}

        <Notifications />

        <header
          className="App-header"
          style={{
            backgroundImage: "url(" + Background + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Render a navbar with logo */}
          <Navbar />

          {/* Main Text in the Homepage */}
          <Herotext />

          <PromoBanner />

          {/* component to show latest/featured episode */}
          <CatchAgain />
          <RecentPosters />
        </header>

        <div className="section-center">
          <ListenAgain />
          {/* <ListenPlayListAgain/> */}
        </div>

        <Media>
          <div className="media">
            <div className="media-player">
              <Player
                src="https://streaming.radio.co/s8c7294f48/listen"
                autoPlay="true"
                vendor="audio"
              />
            </div>
            <div className="media-controls">
              {/* handle live is under construction
              will used to set current playing props */}
              <HandleLive />
            </div>
          </div>
        </Media>
        <Footer />
      </div>
    </>
  );
};

export default Home;
