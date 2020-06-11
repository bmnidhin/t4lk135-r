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
    return <span className="CountDown">"ORMAYUNDO EE MUGHAM? is streaming live! "  </span>;
  }
};

class CountDown extends Component {
render() {
    
    return (
        
        <Countdown
        date={'2020-06-11T19:00:00'} 
        // YYYY-MM-DDTHH:MM:SS
        renderer={renderer}
      />
        
        

     
    )
  }
}
 
export default CountDown;
