import React, { Component } from "react";

const developer = "The TKM Show";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="center">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
              <div className="main-footer justify-content-center">
                <div className="social">
                  <br />
                  <a
                    href="https://www.instagram.com/_thetkmshow_/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram nbm-logo"></i> 
                    Follow to Get Updates
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yNDliZjg5Yy9wb2RjYXN0L3Jzcw%3D%3D"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-podcast nbm-logo"></i> Listen On Google
                    Podcasts
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://open.spotify.com/show/7tmPClseHqoHF5bFYT0F2o"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-spotify nbm-logo"></i> Listen On Spotify
                  </a>
                </div>
                <div></div>

                <p className="artribute">© {developer}.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
