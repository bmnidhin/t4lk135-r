import React, { Component } from 'react'
import base, { auth, providers , databased } from "../../utils/FirebaseSettings";
import { Link } from "react-router-dom";
import OneFeatLiveChat from './OneFeatLiveChat';
export default class FeaturedLiveChat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            comments: {},
            isLoggedIn: false,
            user: "",
          };
        //   this.refComments = base.syncState( "live-comments", {
        //     context: this,
            
        //     state: "comments",
        //   });
        this.mainContent = {
            textAlign: "left",
            textDecoration: "none",
            borderRadius: "5px",
            backgroundColor: "rgb(14, 14, 67)",
            minHeight: "50px",
            isbannerOn: true,
          };
        
          this.inner = {
            padding: "20px",
            color: "white",
          };
    }
    
    render() {
        return (
            <div>
                {/* <OneFeatLiveChat comments={this.state.comments}/> */}
                <Link
            to={"/live/"}
          
          >
            <div style={this.mainContent}>
              <div style={this.inner}>
                <span
                  className="text-uppercase text-muted"
                  style={{ fontSize: "10px" }}
                >
                   Live comments, Song dedications and much more
                </span>
                <div className="d-flex flex-row bd-highlight justify-content-between mb-2">
                    
                  <div className="bd-highlight">
                    <span style={{ fontSize: "19px"}}>
                      
                         






        <p className="text-break text-justify"><span>  </span>💬 Join Live Chat</p>
                    
                    </span>
                    <span style={{ fontSize: "10px" }} className="text-muted">
        {/* Live comments, Song dedications and much more */}
                    </span>
                  </div>
                  <div
                    style={{ height: "100%", display: "inline" }}
                    className="bd-highlight align-middle"
                  >
                    <span className="material-icons " style={{ fontSize: "38px" }}>
                    arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
            </div>
        )
    }
}
