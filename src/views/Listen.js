import React from "react";
// import sections

import { Media, Player } from "react-media-player";
import CustomPlayPause from "./components/CustomPlayPause";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import ListenAgain from "./components/ListenAgain";
import Notifications from "./components/Notifications";

let streamURL =
  "https://node-19.zeno.fm/7dpu3aargzzuv?rj-ttl=5&rj-tok=AAABcniqxPcAfj_wZNkMunG3eA";

const Listen = () => {
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

                <ListenAgain />
              </header>
              <div className="section-center">
                
              </div>

              <Player src={streamURL} autoPlay="true" vendor="audio" />
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

export default Listen;
