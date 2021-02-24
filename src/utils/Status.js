import Axios from "axios";
import React, { Component } from "react";
import base, { auth, providers, databased } from '../utils/FirebaseSettings'
import ReactGA from 'react-ga'



class Status extends Component {

  constructor(props) {
    super(props);
    this.setPercenatge = this.setPercenatge.bind(this);
    this.state = {
      progress: 0,
      isLoggedIn:false,
      user:''

    }

  }

  style = {
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
  };
  componentDidMount() {
    localStorage.setItem("percent", 0)

    setInterval(this.tickingTimer, 30000) //upadate percentage in 1 min
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        // console.log("------------------------------------");
        // console.log(user);
        localStorage.setItem("userid",this.state.user.uid)
      } else {
        this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
      }
    });
    ReactGA.initialize('UA-168458070-1')
  }
  tickingTimer = () => {
    this.setState({ progress: localStorage.getItem("percent") })
    
    let article = {

      name: this.state.user.displayName,
      userId: this.state.user.uid,


      type: "progress",

      title: this.props.title,
      slug: this.props.slug,
      cover: this.props.cover,

      progress: this.state.progress,



    }
    
    let unAuthArticle = {

      name: "Anonymous",
      userId: localStorage.getItem('anonymous'),


      type: "progress",

      title: this.props.title,
      slug: this.props.slug,
      cover: this.props.cover,

      progress: this.state.progress,



    }
    if (this.props.duration !== Infinity && this.props.isPlaying) {

      ReactGA.event({
      category: 'Progress',
      action: this.state.progress,
      label: this.props.title,
      nonInteraction: true,})

      if (this.state.isLoggedIn) {
        Axios.post('https://v2.thetkmshow.in/v2/log', article)
          
        
      }
      else {
        Axios.post('https://v2.thetkmshow.in/v2/log', unAuthArticle)
          
        
      }

    }

  }
  componentDidUpdate() { }
  setPercenatge(percentage) {
    localStorage.setItem("percent", percentage)
  }

  render() {
    
    let percent = (this.props.currentTime/this.props.duration) * 100
    let round = parseFloat(percent).toFixed(3)
    if (round > 5.00 && round < 5.2) {
      this.setPercenatge(5)
    }
    else if (round > 10.00 && round < 10.2) {
      this.setPercenatge(10)
    }
    else if (round > 20.00 && round < 20.2) {
      this.setPercenatge(20)
    }
    else if (round > 30.00 && round < 30.2) {
      this.setPercenatge(30)
    }
    else if (round > 40.00 && round < 40.2) {
      this.setPercenatge(40)
    }
    else if (round > 50.00 && round < 50.2) {
      this.setPercenatge(50)
    }
    else if (round > 60.00 && round < 60.2) {
      this.setPercenatge(60)
    }
    else if (round > 70.00 && round < 70.2) {
      this.setPercenatge(70)
    }
    else if (round > 80.00 && round < 80.2) {
      this.setPercenatge(80)
    }
    else if (round > 90.00) {
      this.setPercenatge(100)
    }
    else {

    }

    // percentage(percent)
    return (
    
        <p style={{ display: "" }}>
         {this.props.currentTime}
          
        </p>
     
    );
  }
}
export default Status;


// const tickingTimer = () => {
//   this.se
//   console.log(this.state.progress + "hehe")
// }