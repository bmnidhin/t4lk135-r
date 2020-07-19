import React, { Component } from 'react'
import axios from "axios";

export default class RecentPosters extends Component {
    state={
        posterOne :"",
        posterTwo :"", 

    };
    componentDidMount() {
        axios
          .get("https://api.thetkmshow.in/settings")
          .then((response) => {
            this.setState({
               posterOne: response.data.map((event) => event.posterImgOne),
               posterTwo: response.data.map((event) => event.posterImgTwo)
               ,});})
          .catch((error) => {
            console.log(error);
          });
      }
    imageStyle={
        width:"100%",
        borderRadius:"5px"
    }
    title={
        color:"white",
        marginTop:"5px",
       marginBottom:"25px",
       textAlign:'left'
    }
    render() {
        return (
          <div className="containers"style={{marginTop:"20px",marginBottom:"20px"}}>
            <h6 style={this.title}></h6>
            <div className="row">
              <div className="col-sm"><img src={this.state.posterOne} style={this.imageStyle} alt="poster"/></div>
              <div className="col-sm"><img src={this.state.posterTwo} style={this.imageStyle} className='d-none d-sm-block'alt="poster"/></div>
            </div>
          </div>
        );
    }
}
