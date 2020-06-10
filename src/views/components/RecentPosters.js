import React, { Component } from 'react'

const developer= "The TKM Show";
let imageOne = require('../img/01.jpg');
let eventOneTitle ="Kamithaakal Aanoda inte preshnam";
let eventOneDescription ="";
let eventOneStartTime ="06/15/2020 08:00 AM";
let eventOneEndTime ="06/15/2020 10:00 AM";

// event Two
let imageTwo = require('../img/aswin8.jpg');
let eventTwoTitle ="Kamithaakal";
let eventTwoDescription ="";
let eventTwoStartTime ="06/15/2020 08:00 AM";
let eventTwoEndTime ="06/15/2020 10:00 AM";

// event Three
let imageThree = require('../img/launch.jpg');
let eventThreeTitle ="Kamithaakal";
let eventThreeDescription ="";
let eventThreeStartTime ="06/15/2020 08:00 AM";
let eventThreeEndTime ="06/15/2020 10:00 AM";


let podcastImgGoogle = require('../img/EN_Google_Podcasts_Badge_8x.png');
let podcastImgSpotify = require('../img/spotify-podcast-badge-wht-blk-165x40.png');
const timezone ="India/Kolkata";
const location ="Kollam Kerala India";

class RecentPosters extends Component {

 
  render() {
    
    return (
       
        <div className="nbm-img">
        <div className="section">
 
   
   <div className="row">
     <div className="col s12 m4 hide">
       <div className="icon-block">
         
         <img src={imageOne} width="100%"className="nbm-poster z-depth-3" alt="Poster"></img>
         <br/><br/>
         {/* <div title="Add to Calendar" className="addeventatc"> 
           Add Event to Calendar
           <span className="start">{eventOneStartTime}</span>
           <span className="end">{eventOneEndTime}</span>
           <span className="timezone">{timezone}</span>
           <span className="title">{eventOneTitle}</span>
           <span className="description">{eventOneDescription}</span>
           <span className="location">{location}</span>
       </div><br/><br/> */}
 
 
         
       </div>
     </div>
 
     <div className="col s12 m6">
       <div className="icon-block">
         
       <img src={imageTwo} width="100%"className="nbm-poster z-depth-3" alt="Poster"></img>
       <br/><br/>
         {/* <div title="Add to Calendar" className="addeventatc"> 
           Add Event to Calendar
           <span className="start">{eventTwoStartTime}</span>
           <span className="end">{eventTwoEndTime}</span>
           <span className="timezone">{timezone}</span>
           <span className="title">{eventTwoTitle}</span>
           <span className="description">{eventTwoDescription}</span>
           <span className="location">{location}</span>
       </div><br/><br/> */}
 
        
       </div>
     </div>
 
     <div className="col s12 m6 hide-small">
       <div className="icon-block">
         
       <img src={imageThree} width="100%"className="nbm-poster z-depth-3" alt="Poster"></img>
       <br/><br/>
         {/* <div title="Add to Calendar" className="addeventatc"> 
           Add Event to Calendar
           <span className="start">{eventThreeStartTime}</span>
           <span className="end">{eventThreeEndTime}</span>
           <span className="timezone">{timezone}</span>
           <span className="title">{eventThreeTitle}</span>
           <span className="description">{eventThreeDescription}</span>
           <span className="location">{location}</span>
       </div><br/><br/> */}
 
        
       </div>
     </div>
   </div>
 
 </div>
 
 
 
 
 
 
       
        </div>
        
        

     
    )
  }
}
 
export default RecentPosters;