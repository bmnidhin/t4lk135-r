import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = "https://bit.ly/thetkmshow";
  }
  render(){
    return (
      <div style={{minHeight:"80vh",paddingTop:'40vh', backgroundColor: "#030229",textAlign: "center",color:'#ffffff'}}>

        Redirecting.....{this.props.loc}

      </div>
    );
  }
}

export default Redirect;