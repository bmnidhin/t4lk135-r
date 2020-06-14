import React, { useState } from "react";
import { useParams } from "react-router";

// import sections
import { Media, Player, controls } from "react-media-player";
import CustomPlayPause from "./components/CustomPlayPause";
import PodPlayer from "./components/PodPlayer";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import RecentPosters from "./components/RecentPosters";
import { Helmet } from "react-helmet";

const postsData = require("./API/tracks.json");

const Post = () => {
  var { slug } = useParams(),
    post = findPostBySlug(slug);

  let streamURL =
    "https://node-19.zeno.fm/7dpu3aargzzuv?rj-ttl=5&rj-tok=AAABcniqxPcAfj_wZNkMunG3eA";

  let PodcastURL = post.URL;
  const podtitle = post.title;
  const duration = post.duration;
  const art = post.cover;
  const writeup = post.content;
  const { CurrentTime, Progress, SeekBar, Duration } = controls;

  const [stream, podcast] = useState(streamURL);
  const [streamControlls, PodcastControlls] = useState("hide");
  const [hideinfo, ShowInfo] = useState("show");

  // var { username } = useParams(),
  // post = findPostByUsename(username);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title} | The TKM Show</title>
        <link rel="canonical" href="https://thetkmshow.in/listen/{post.slug}" />
      </Helmet>
      <div className="App">
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

                <div className="artboard">
                  <div className="artboard-inner">
                    <PodPlayer
                      art={art}
                      podtitle={podtitle}
                      writeup={writeup}
                    />

                    <div className={hideinfo}>
                      <div className="podswitcher">
                        <div className="podswitch-inner ">
                          <div class="row center-align">
                            <div class="col s6 left-align">
                              <div
                                className="waves-effect waves-light center-align"
                                onClick={() => {
                                  podcast(PodcastURL);
                                  
                                }}
                              >
                                <p
                                  className="valign-wrapper"
                                  style={{ marginTop: 0 }}
                                >
                                  <span
                                    class="material-icons"
                                    style={{ fontSize: 43 }}
                                  >
                                    play_circle_outline
                                  </span>{"  "}
                                  <span className="truncate"> 
                                  { stream==PodcastURL ? ' Playing' : ' Listen'}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="col s2 right-align"></div>
                            <div
                              className="col s4 right-align truncate"
                              style={{ marginTop: 2 }}
                            >
                              {duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </header>
              <div className="section-center">
                <RecentPosters />
              </div>

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

function findPostBySlug(slug) {
  return postsData.find((o) => o.slug === slug);
}

// function findPostByUsename(username) {
//   return enthiran.find(o => o.username === username);
// }

export default Post;
