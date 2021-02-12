import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import { Link } from 'react-router-dom';
import Placehold from "../base/Placehold";
// import Skeleton from '@yisheng90/react-loading';

export default class FeaturedRandom extends Component {
  state = {
    notLoaded:true,
    listen: [],
    sliceAt:4,
    random:4
  };
  componentDidMount() {
    axios
      .get("https://api.thetkmshow.in/alltracks")
      .then((response) => {
        this.setState({
          notLoaded:false,
          listen: response.data,
        });
        
      }).then(()=>{
        const random =Math.floor(Math.random() * (this.state.listen.length-4))
      
        this.setState({
            random:random
          });
      }
       
      )
      .catch((error) => {
        this.setState({
          notLoaded:true,
        });
        console.log(error);
      });
  }

 
  heading={
     paddingTop:"20px",
     paddingBottom:"15px",
     textAlign:"left",
     color:"#ffffff"
  }
  itemHeading={
    textAlign:"left",
    fontSize:"10px",
    paddingTop:"15px",
    color:"white",
  }
  render() {
      
    return (
      <div className="pt-5">
        <div className="d-flex flex-row bd-highlight justify-content-between mb-3">
          <div className=" bd-highlight"> <span className="font-weight-bolder"style={this.heading}>FOR YOU</span></div>
          <div className=" bd-highlight">
              
          <Link to="/listen">VIEW ALL</Link>
          </div>
          
        </div>
       

        <div className="row">
         
     
          {this.state.listen.slice(this.state.random, this.state.random+4).map((track) => (
            track.isEventPublished &&(
              <div
              className={"col-6 col-md-3"}
              key={track.slug}
            >
              <a href={track.slug}>
                <img
                  src={track.cover}
                  width="100%"
                  className="roundedImage"
                  alt="Poster"
                ></img>
                <p style={this.itemHeading} className='text-truncate'>{track.title}</p>
              </a>
            </div>
            )))}
          


          <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
           <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
           <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
           <div className="col-6 col-md-3">
          <Placehold width="100%" height="200px" loaded={this.state.notLoaded}/>
           </div>
        </div>
      
      </div>
    );
  }
}
