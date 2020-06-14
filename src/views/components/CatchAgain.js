import React, { Component } from "react";
import Axios from "axios";
// import { Link } from 'react-router';

const postsData = require("../API/notifications.json");
let showOrHideBanner = postsData.map((postsData) => {
  return postsData.featured;
});

class CatchAgain extends Component {
  state = {
    listen: [],
  };

  componentDidMount() {
    Axios.get(
      "https://bmnidhin.github.io/t4lk135-r/src/views/API/tracks.json"
    ).then((res) => {
      this.setState({ listen: res.data });
    });
  }

  render() {
    return (
      <>
        <div className={showOrHideBanner + " " + "hide-on-large-only nbm-img"}>
          <div className="section">
            <div className="row">
              {this.state.listen.slice(0, 1).map((track) => (
                <div className="col s12 m12 "key={track.slug}>
                  <a href={"/listen/" + track.slug}>
                    <div className="icon-block">
                      <img
                        src={track.cover}
                        width="100%"
                        className="nbm-poster z-depth-3"
                        alt="Poster"
                      ></img>
                      {/* {track.title} */}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CatchAgain;
