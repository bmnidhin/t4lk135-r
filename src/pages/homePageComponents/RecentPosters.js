import React, { Component } from 'react'
import axios from "axios";
import * as SETTINGS from '../constants/Settings';
import { Link } from "react-router-dom";

export default class RecentPosters extends Component {
  state = {
    notLoaded: false,
    posterOne: "",
    posterTwo: "",

  };
  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/notifications")
      .then((response) => {
        this.setState({
          notLoaded: false,
          posterOne: response.data.map((event) => event.posterImgOne),
          posterTwo: response.data.map((event) => event.posterImgTwo)
          ,
        });
      })
      .catch((error) => {
        this.setState({
          notLoaded: false,
        });
        console.log(error);
      });
  }
  imageStyle = {
    width: "100%",
    borderRadius: "5px"
  }
  mainContent = {
    textAlign: "left",
    textDecoration: "none",
    borderRadius: "5px",
    backgroundColor: SETTINGS.COLOURS.CARD_GRADIENT,
    minHeight: "50px",
    color:SETTINGS.COLOURS.TEXT_COLOR_L2

  };
  title = {
    color: "white",
    marginTop: "5px",
    marginBottom: "25px",
    textAlign: 'left'
  }
  render() {
    return (
      <div className="containers" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
           
            <div className="col-6 col-md-6 pl-0 ">
            <Link to={"/listen"}>
              <div style={this.mainContent} className="card text-center " >
                <div className="card-body">
                  <div className="pt-3 pb-3">
                  <span className="material-icons"style={{ fontSize: "38px",color:SETTINGS.COLOURS.TEXT_COLOR_L1 }}>
                  headset
                </span>
                <span>
                <h3 style={{ fontSize: "15px", fontWeight: "500" }} className="text-uppercase pt-2">
                  Episodes
                </h3>
                </span>
                  </div>
               </div>
              </div>
              </Link>
            </div>
            
            <div className="col-6 col-md-6 pr-0">
            <Link to={"/library"}>
              <div style={this.mainContent} className="card text-center" >
                <div className="card-body">
                  <div className="pt-3 pb-3">
                  <span className="material-icons"style={{ fontSize: "38px",color:SETTINGS.COLOURS.TEXT_COLOR_L1 }}>
                  person
                </span>
                <span>
                <h3 style={{ fontSize: "15px", fontWeight: "500" }} className="text-uppercase pt-2">
                  my account
                </h3>
                </span>
                  </div>
               </div>
              </div>
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
