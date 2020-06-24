import React, { useState } from "react";
import Moment from 'moment';
// import Moment from 'react-moment';
 
const publishedDate = "2020-06-25"
const publishedTime = "10:34:41"
const currentTime = Moment().format();
const publishAt = publishedDate + "T" + publishedTime + "+05:30";


const a = Moment(publishAt);
const b = Moment(currentTime);
const myDiff = b.diff(a);

const isEventPublished = myDiff > 0;
const isBannerActive = myDiff > 0 && myDiff <86400000 //displaybanner for 24 hr





const PlayGround = () => {
   
    

 
// const returned_endate = moment(startdate).add(2, 'hours');


  return (
    <>
      
      <div className="App"style={{color:"white"}}>
        
          
          <h1>Its Working</h1>
          
            <ul>
                <li> {isEventPublished ? 'Yes Published' : 'No It is not Published'}</li>
                <li> {isBannerActive ? 'Banner Active' : 'Banner Hidden'}</li>
  <li>{currentTime}</li>
  <li>{publishAt}</li>
                <li>{myDiff}</li>
                
                
           
            
                 
            </ul>
            
        
        
      </div>
    </>
  );
};




export default PlayGround;
