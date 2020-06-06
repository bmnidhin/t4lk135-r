import React, { Component } from 'react'
import Countdown from 'react-countdown';




// Random component
const Completionist = () => <span></span>;
 
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="CountDown">{hours} Hours {minutes}:Minutes {seconds} Seconds to <i>"Orma Undo ee Mugham?"</i>  </span>;
  }
};

class CountDown extends Component {
render() {
    
    return (
        
        <Countdown
        date={'2020-06-07T20:00:00'}
        renderer={renderer}
      />
        
        

     
    )
  }
}
 
export default CountDown;