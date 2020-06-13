import React, { Component } from 'react'
import Axios from 'axios';
// import { Link } from 'react-router';


let imageOne = require('../img/cover1.jpg');


class ServerPlayList extends Component {

  state ={
    listen:[]
  };

  componentDidMount(){
    Axios.get('https://t4lk135-server.vercel.app/api/v1/tracks.json')
    .then(
      res => {this.setState({listen:res.data})}
    )
  }
 
  render() {
    
    return (
        
      
         
         <h1>Rendered</h1>
        
        
  
  
      
     

        

     
    )
  }
}
 
export default ServerPlayList;