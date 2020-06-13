import React, { Component } from 'react'
import Axios from 'axios';
// import { Link } from 'react-router';


let imageOne = require('../img/cover1.jpg');


class ListenAgain extends Component {

  state ={
    listen:[]
  };

  componentDidMount(){
    Axios.get('https://bmnidhin.github.io/t4lk135-r/src/views/API/tracks.json')
    .then(
      res => {this.setState({listen:res.data})}
    )
  }
 
  render() {
    
    return (
        
      <>
      <div className="nbm-img">
      <div className="section">
 
   
 <div className="row">
     <div className="left-align">
     <div class="row">
      <div class="col s6"><h5>Listen Again</h5></div>
      <div class="col s6 right-align"><a href="/listen"><br/>View All</a></div>
      
    </div>
     
   
     </div>
     
      {this.state.listen.map( track =>
      
      <div className="col s6 m4">
       

      <a href ={"/listen/"+ track.slug} >
       <div className="icon-block">
         
         <img src={track.cover} width="100%"className="nbm-poster z-depth-3" alt="Poster"></img>
         {/* {track.title} */}
         
        
        
        
  
  
         
       </div>
       </a>
     </div>
     

      )}

    
  
 </div>

</div>


      </div>
      </>
        
        

     
    )
  }
}
 
export default ListenAgain;