import React, { useState } from "react";
import { useParams } from "react-router";
// import sections

import { Media, Player, controls } from "react-media-player";
import CustomPlayPause from "./components/CustomPlayPause";
import PodPlayer from "./components/PodPlayer";
import Navbar from "./components/Navbar";
import Herotext from "./components/Herotext";
import Footer from "./components/Footer";
import RecentPosters from "./components/RecentPosters";
import PlaylistPlayer from "./components/PlaylistPLayer";
import { Helmet } from "react-helmet";

import Notifications from "./components/Notifications";

const postsData = require("./API/listen.json");

let PodcastURL =
  "https://anchor.fm/s/249bf89c/podcast/play/14682808/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-3%2F79146503-44100-2-196672c664794.mp3";

let streamURL =
  "https://streaming.radio.co/s8c7294f48/listen";
// const podtitle ="Stay Tuned..! Trial Episode"
const duration = "12 Min";
// const art = 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/6042015/6042015-1591172558348-8d8b77870bd83.jpg';
// const writeup ="One of the architects behind Hestia'19, The Ex G-Sec and a name familiar to the majority of TKMians, in our first episode 'Ormayundo ee mugham?' we bring to you TKM's very own Aswin P S."




const Playlist = () => {
var { slug } = useParams(),
post = findPostBySlug(slug);

  const title = post.title;
  const content = post.content;
  const art = post["album-art"];
  const one = post["episode-one"];
  const two = post["episode-two"];
  const three = post["episode-three"];
  const four = post["episode-four"];
  const five = post["episode-five"];
  const six = post["episode-seven"];
  const seven = post["episode-seven"];
  const eight = post["episode-eight"];
  const nine = post["episode-nine"];
  const ten = post["episode-ten"];
  const meta = post["meta-data"];

  const [stream, podcast] = useState(streamURL);
  const [streamControlls, PodcastControlls] = useState("hide");
  const [hideinfo, ShowInfo] = useState("show");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title} | The TKM Show</title>
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

                <div className={hideinfo}>
                  <div className="artboard">
                    <div className="artboard-inner">
                      <PodPlayer art={art} podtitle={title} writeup={content} />

                      <PlaylistPlayer
                        title={title}
                        content={content}
                        art={art}
                        one={one}
                        two={two}
                        three={three}
                        four={four}
                        five={five}
                        six={six}
                        seven={seven}
                        eight={eight}
                        nine={nine}
                        ten={ten}
                        meta={meta}
                      />
                    </div>
                  </div>
                </div>
              </header>
              <div className="section-center">
                <RecentPosters />
              </div>

            
            </div>
     
          </div>
        </Media>
        <Footer />
      </div>
    </>
  );
};

function findPostBySlug(slug) {
  return postsData.find((o) => o.slug === slug);
}

export default Playlist;
