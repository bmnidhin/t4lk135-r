import React, { Component } from "react";
import Axios from "axios";
// import { Link } from 'react-router';

let imageOne = require("../img/cover1.jpg");

class ListenPlayListAgain extends Component {
  state = {
    listen: [],
  };

  componentDidMount() {
    Axios.get(
      "https://bmnidhin.github.io/t4lk135-r/src/views/API/listen.json"
    ).then((res) => {
      this.setState({ listen: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="nbm-img">
          <div className="section">
            <div className="row">
              <div className="left-align">
                <div class="row">
                  <div class="col s6">
                    <h5>Playlists</h5>
                  </div>
                  <div class="col s6 right-align">
                    <a href="/playlist">
                      <br />
                      View All
                    </a>
                  </div>
                </div>
              </div>

              {this.state.listen.map((track) => (
                <div className="col s6 m4"key={track.slug}>
                  <a href={"/playlist/" + track.slug}>
                    <div className="icon-block">
                      <img
                        src={track["album-art"]}
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

export default ListenPlayListAgain;
