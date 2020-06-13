
import React, { Component } from 'react'
import Countdown from 'react-countdown';


const postsData = require("../API/notifications.json");
const count = '2020-06-12T21:00:00'




let upComingEventName = postsData.map( (postsData)=>{
  return (
    postsData.upComingEventName
    
  )
}) 
let showOrHideEvent = postsData.map( (postsData)=>{
  return (
    postsData.showOrHideEvent
    
  )
}) 
let showOrHideNotification = postsData.map( (postsData)=>{
  return (
    postsData.showOrHideNotification
    
  )
})

let notification = postsData.map( (postsData)=>{
  return (
    postsData.notification
    
  )
})
let URL = postsData.map( (postsData)=>{
  return (
    postsData.bannerURL
    
  )
})




// Random component
const Completionist = () => <span className=""><a href ={URL}><u>{upComingEventName} </u>is Streaming Live </a>🎙 📻</span>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="">{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds to <i>{upComingEventName}</i>  </span>;
  }
};



class Notifications extends Component {
render() {
    
  let date = postsData.map( (postsData)=>{
    return (
      postsData.countdownDate
      
    )
  }) 
  let eventDate = new Date().toISOString()
  
    return (
        <>

      {/* <span className={showOrHideNotification}>
      <p className="countdown">{notification}</p>
      </span> */}
          
          <span className={showOrHideEvent}>
          <div className="topNotification">
            <p className="paratop">
            <div class="row">
      <div class="col s1 right-align"></div>
      <div class="col s10">
        

       <Countdown
        date={count} 
        // YYYY-MM-DDTHH:MM:SS
        renderer={renderer}
      />
      </div>
      <div class="col s1">
      
      </div>
      
    </div>
            </p>
          </div>
          </span>
          <span className={showOrHideNotification}>
          <div className="topNotification">
            <p className="paratop">
            <div class="row">
      <div class="col s1 right-align"></div>
      <div class="col s10">
        
     <span>{notification}</span>

      
      </div>
      <div class="col s1">
      
      </div>
      
    </div>
            </p>
          </div>
         {/* <p className="countdown">{notification}</p> */}
      </span>
        

        
       
        
        </>
        

     
    )
  }
}
 
export default Notifications;
