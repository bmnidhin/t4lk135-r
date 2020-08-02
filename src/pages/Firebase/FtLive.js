import React, { Component } from 'react'
import Moment from "moment";
import { Link } from "react-router-dom";


export default class FtLive extends Component {
    mainContent = {
        textAlign: "left",
        textDecoration: "none",
        borderRadius: "5px",
        backgroundColor: "rgb(14, 14, 67)",
        minHeight: "50px",
        isbannerOn: true,
      };
    
      inner = {
        padding: "20px",
        color: "white",
      };
    render() {
        const timestamp = this.props.comment.user.time;
        return (
            <Link
            to={"/live/"}
          
          >
            <div style={this.mainContent}>
              <div style={this.inner}>
                <span
                  className="text-uppercase text-muted"
                  style={{ fontSize: "10px" }}
                >
                  Join live chat now !!
                </span>
                <div className="d-flex flex-row bd-highlight justify-content-between mb-2">
                    
                  <div className="bd-highlight">
                    <span style={{ fontSize: "19px"}}>
                      
                         






        <p className="text-break text-justify"><span>  </span>💬{'"'}{this.props.comment.comment} {'"'}</p>
                    
                    </span>
                    <span style={{ fontSize: "10px" }} className="text-muted">
        {this.props.comment.user.name}{" "} | {" "} {Moment(timestamp).fromNow()}
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
        )
    }
}
