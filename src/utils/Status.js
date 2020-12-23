import Axios from "axios";
import React, { Component } from "react";


import {
  Media,
  Player,
  controls,
  withMediaProps,
  utils,
} from "react-media-player";
const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls;



class Status extends Component {
  
    constructor(props) {
        super(props);
        this.setPercenatge = this.setPercenatge.bind(this);
       this.state ={
            progress :0,
          
        }
           
    }
 
  style = {
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
  };
  componentDidMount() {
    localStorage.setItem("percent", 404)
    
    setInterval(this.tickingTimer, 60000) //upadate percentage in 1 min
  }
  tickingTimer = () => {
    this.setState({progress:localStorage.getItem("percent")})
    console.log(this.state.progress)
    let article ={
     
      name: this.props.name,
      userId: this.props.id,

     
      type: "progress",

      title: this.props.title,
      slug: this.props.slug,
      cover: this.props.cover,

      progress: this.state.progress,
      
      
      
   }
   
   let unAuthArticle ={
     
    name: "Anonymous",
    userId:localStorage.getItem('anonymous'),

   
    type: "progress",

    title: this.props.title,
    slug: this.props.slug,
    cover: this.props.cover,

    progress: this.state.progress,
    
    
    
 }
   if(this.props.media.duration !== Infinity ){
     if(this.props.auth){
      Axios.post('http://localhost:5000/v2/log', article)
      .then(response => console.log(response.data)); 
     }
     else{
      Axios.post('http://localhost:5000/v2/log', unAuthArticle)
      .then(response => console.log(response.data)); 
    }
   
   }
    
   }
  componentDidUpdate(){}
  setPercenatge(percentage){
    localStorage.setItem("percent", percentage)
  }
 
  render() {
    const { className, style, media } = this.props;
    let percent = (media.currentTime/ media.duration)*100
    let round = parseFloat(percent).toFixed(3)
    if(round > 5.00 && round < 5.2){
      this.setPercenatge(5)
    }
    else if(round>10.00 && round<10.2){
      this.setPercenatge(10)
    }
    else if(round>20.00 && round<20.2){
      this.setPercenatge(20)
    }
    else if(round>30.00 && round<30.2){
      this.setPercenatge(30)
    }
    else if(round>40.00 && round<40.2){
      this.setPercenatge(40)
    }
    else if(round>50.00 && round<50.2){
      this.setPercenatge(50)
    }
    else if(round>60.00 && round<60.2){
      this.setPercenatge(60)
    }
    else if(round>70.00 && round<70.2){
      this.setPercenatge(70)
    }
    else if(round>80.00 && round<80.2){
      this.setPercenatge(80)
    }
    else if(round>90.00){
      this.setPercenatge(100)
    }
   else{
     
    }
   
    // percentage(percent)
    return (
        <Media>
         <p style={{display:"none"}}>
            Now Playing : {this.props.title} <br/>
            cover : {this.props.cover} <br/>
            Auth : {this.props.auth?"true":"False"} <br/>
            IsPlaying : {media.isPlaying?"True":"False"} <br/>
            Slug : {this.props.slug} <br/>
            Name : {this.props.name} <br/>
            UID : {this.props.id} <br/>
            Duration: {media.duration} <br/>
            CurrentTime: {media.currentTime} <br/>
            Autoplay:{localStorage.getItem("autoplay")} <br/>
            percent : {percent} <br/>
            progress : {this.state.progress}
         </p>
         </Media>
    );
  }
}
export default withMediaProps(Status);


// const tickingTimer = () => {
//   this.se
//   console.log(this.state.progress + "hehe")
// }