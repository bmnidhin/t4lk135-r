import React, { Component } from 'react'
// import { Link } from 'react-router';

const postsData = require("../API/notifications.json");

let imageOne = require('../img/banner.jpg');


let showOrHideBanner = postsData.map( (postsData)=>{
  return (
    postsData.showOrHideBanner
    
  )
}) 

let bannerURL = postsData.map( (postsData)=>{
  return (
    postsData.bannerURL
    
  )
}) 

class PromoBanner extends Component {

 
  render() {
    
    return (
        
      <>
      
      <div className="nbm-img">
     
       
    <div className={showOrHideBanner}>
     <div className="sections">
    
 
   
       <div className="row">
    
     
   <div className="col s12 m12">

    <a href ={bannerURL}>
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


      </div>
      </>
        
        

     
    )
  }
}
 
export default PromoBanner;