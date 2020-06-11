import React, { Component } from 'react'
// import { Link } from 'react-router';


let imageOne = require('../img/cover1.jpg');


class ListenAgain extends Component {

 
  render() {
    
    return (
        
      <>
      <div className="nbm-img">
      <div className="section">
 
   
 <div className="row">
     <div className="center-align">
     <h3>Listen Again</h3>
     <p>Follow the link below to listen the Episode again</p>
     </div>
     
   <div className="col s12 m4">
       

    <a href ="/listen/ormayundo-ee-mugham">
     <div className="icon-block">
       
       <img src={imageOne} width="100%"className="nbm-poster z-depth-3" alt="Poster"></img>
       
      {/* <div class="left"><a href ="/listen/orma-undo-ee-mugham"> Listen </a></div> */}
       {/* <div class="right"><i className="small material-icons">arrow_forward</i></div> */}
        
      
      


       
     </div>
     </a>
   </div>

   <div className="col s12 m4">
     
   </div>

   <div className="col s12 m4">
     
   </div>
   <div className="col s12 m4">
     
   </div>
 </div>

</div>


      </div>
      </>
        
        

     
    )
  }
}
 
export default ListenAgain;