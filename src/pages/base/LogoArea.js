import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const logo = require("./img/tkmshow_white.png");
const appName ="thetkmshow"

export default class LogoArea extends Component {
    constructor(props) {
        super(props);
        
        this.divStyle = {
          width: "100%",
        //   height: "45px",
          color: "white",
          backgroundColor: "#0E0E93",
          textAlign: "center",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "15px",
        };
        this.imageStyle={
            width:"18vh",
            height:"auto"
        }
      }
    render() {
        return (
            <div style={this.divStyle}>
                <Link to="/">
                <img src={logo} style={this.imageStyle} alt={appName}></img>
                </Link>
               
           
            
          
            </div>
        )
    }
}
