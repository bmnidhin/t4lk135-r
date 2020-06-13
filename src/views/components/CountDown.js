import React, { Component } from 'react'
import Countdown from 'react-countdown';
import Post from '../Post';


const count = '2020-06-12T21:00:00'




const postsData = require("../API/notifications.json");

 

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




// Random component
const Completionist = () => <p className="countdown">{upComingEventName} is Streaming Live</p>;
 
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="CountDown">{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds to <i>{upComingEventName}</i>  </span>;
  }
};



class CountDown extends Component {
render() {
    
  let date = postsData.map( (postsData)=>{
    return (
      postsData.countdownDate
      
    )
  }) 
  let eventDate = new Date().toISOString()
  
    return (
        <>
         
         <span className={showOrHideEvent}> <Countdown
        date={count} 
        // YYYY-MM-DDTHH:MM:SS
        renderer={renderer}
      /></span>

      <span className={showOrHideNotification}>
      <p className="countdown">{notification}</p>
      </span>
            
        

        
       
        
        </>
        

     
    )
  }
}
 
export default CountDown;
