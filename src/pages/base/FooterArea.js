import React, { Component } from 'react'

export default class FooterArea extends Component {
    top={
        width:"100%",
        backgroundColor:"rgb(14, 14, 67)",
        padding:'10px',
        textAlign:'center',
        color:'white',
    }
    render() {
        return (
          <div>
            <div style={this.top} className="">
              <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
                <div className="p-2 bd-highlight">
                <a
                    href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yNDliZjg5Yy9wb2RjYXN0L3Jzcw%3D%3D"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-podcast nbm-logo"></i> Google Podcasts
                  </a>
                </div>
                <div className="p-2 bd-highlight">
                <a
                    href="https://open.spotify.com/show/7tmPClseHqoHF5bFYT0F2o"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-spotify nbm-logo"></i> Spotify
                  </a>
                </div>
                <div className="p-2 bd-highlight">
                <a
                    href="https://www.instagram.com/_thetkmshow_/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram nbm-logo"></i> Follow
                  </a>
                </div>
               
              </div>
              <div className="d-flex flex-row bd-highlight mb-3 justify-content-center">
             
              
                <div className="p-2 bd-highlight">
                © thetkmshow
               </div>
               
              </div>
            </div>
          </div>
        );
    }
}
