import React, { Component } from 'react'

const Appname= "The TKM Shows";
const logo = require('./../img/tkmshow_white.png');

class Navbar extends Component {

 
  render() {
    
    return (
      <>

        <nav className="nav">
      
         
      </nav>
      <div class="justify-content-center">
        <img src={logo} height="100px"alt={Appname}>.</img>
      </div>
    </>
     
    )
  }
}
 
export default Navbar;