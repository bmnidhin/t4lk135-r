import React, { Component } from 'react'
// import { Link } from 'react-router';


let imageOne = require('../img/banner.jpg');


class PromoBanner extends Component {

 
  render() {
    
    return (
        
      <>
      <div className="nbm-img">
      <div className="sections">
 
   
 <div className="row">
    
     
   <div className="col s12 m12">
       

    <a href ="/listen/ormayundo-ee-mugham">
     <div className="icon-block">
       
       <img src={imageOne} width="100%"className="nbm-poster z-depth-3" alt="Poster"></img>
       
      {/* <div class="left"><a href ="/listen/orma-undo-ee-mugham"> Listen </a></div> */}
       {/* <div class="right"><i className="small material-icons">arrow_forward</i></div> */}
        
      
      


       
     </div>
     </a>
   </div>

   
 </div>

</div>


      </div>
      </>
        
        

     
    )
  }
}
 
export default PromoBanner;