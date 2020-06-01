import React from 'react';
// import logo from './logo.svg';
import { Media, Player, } from 'react-media-player'
import CustomPlayPause from './CustomPlayPause'

import './App.css';

const Appname= "Google";
// const { PlayPause, MuteUnmute,Volume, } = controls
// event One
let imageOne = require('./02.jpeg');
let eventOneTitle ="Kamithaakal Aanoda inte preshnam";
let eventOneDescription ="";
let eventOneStartTime ="06/15/2020 08:00 AM";
let eventOneEndTime ="06/15/2020 10:00 AM";

// event Two
let imageTwo = require('./02.jpeg');
let eventTwoTitle ="Kamithaakal";
let eventTwoDescription ="";
let eventTwoStartTime ="06/15/2020 08:00 AM";
let eventTwoEndTime ="06/15/2020 10:00 AM";

// event Three
let imageThree = require('./02.jpeg');
let eventThreeTitle ="Kamithaakal";
let eventThreeDescription ="";
let eventThreeStartTime ="06/15/2020 08:00 AM";
let eventThreeEndTime ="06/15/2020 10:00 AM";


let podcastImgGoogle = require('./EN_Google_Podcasts_Badge_8x.png');
let podcastImgSpotify = require('./spotify-podcast-badge-wht-grn-660x160.png');
const timezone ="India/Kolkata";
const location ="Kollam Kerala India";
const logo = require('./logo.png');
const Background = require('./wave.jpg');







function App() {
  
  return (
    <div className="App">
      
     
     
    
      <header className="App-header"style={{  
          backgroundImage:  "url(" + Background + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <nav className="nav justify-content-center">
        <img src={logo}height="150px"alt="The TKM Show"></img>
        
      </nav>
        <div>
        <img src={podcastImgGoogle}height="50px"alt="Google Podcast"></img>&nbsp;&nbsp;
        <img src={podcastImgSpotify}height="50px"alt="Spotify"></img>
        </div>
       <div className="nbm-img">
       <div className="section">

  
  <div className="row">
    <div className="col s12 m4">
      <div className="icon-block">
        
        <img src={imageOne} width="100%"className="nbm-poster" alt="Poster"></img>
        <br/><br/>
        <div title="Add to Calendar" className="addeventatc"> 
          Add Event to Calendar
          <span className="start">{eventOneStartTime}</span>
          <span className="end">{eventOneEndTime}</span>
          <span className="timezone">{timezone}</span>
          <span className="title">{eventOneTitle}</span>
          <span className="description">{eventOneDescription}</span>
          <span className="location">{location}</span>
      </div><br/><br/>


        
      </div>
    </div>

    <div className="col s12 m4">
      <div className="icon-block">
        
      <img src={imageTwo} width="100%"className="nbm-poster" alt="Poster"></img>
      <br/><br/>
        <div title="Add to Calendar" className="addeventatc"> 
          Add Event to Calendar
          <span className="start">{eventTwoStartTime}</span>
          <span className="end">{eventTwoEndTime}</span>
          <span className="timezone">{timezone}</span>
          <span className="title">{eventTwoTitle}</span>
          <span className="description">{eventTwoDescription}</span>
          <span className="location">{location}</span>
      </div><br/><br/>

       
      </div>
    </div>

    <div className="col s12 m4">
      <div className="icon-block">
        
      <img src={imageThree} width="100%"className="nbm-poster" alt="Poster"></img>
      <br/><br/>
        <div title="Add to Calendar" className="addeventatc"> 
          Add Event to Calendar
          <span className="start">{eventThreeStartTime}</span>
          <span className="end">{eventThreeEndTime}</span>
          <span className="timezone">{timezone}</span>
          <span className="title">{eventThreeTitle}</span>
          <span className="description">{eventThreeDescription}</span>
          <span className="location">{location}</span>
      </div><br/><br/>

       
      </div>
    </div>
  </div>

</div>






      
       </div>
      </header>
      <Media>
        <div className="media">
          
          <div className="media-controls">
           
            
          </div>
        </div>
      </Media>
     
      <Media>
      <div className="media">
      <div className="media-player">
            <Player src="http://stream.zeno.fm/7dpu3aargzzuv" autoPlay="true" vendor="audio"/>
          </div>
      <div className="media-controls">
      <CustomPlayPause />
 
    </div>
    </div>
    </Media>
    
      <footer className="footer">
            <div className="center">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                        <div className="main-footer justify-content-center">

                            <div className="social">
                               <br/>
                                <a href="https://instagram.com/tkmtalkies"><i className="fa fa-instagram nbm-logo"></i></a>&nbsp;&nbsp;
                                <a href="https://instagram.com/tkmtalkies"><i className="fa fa-facebook nbm-logo"></i></a>&nbsp;&nbsp;
                                <a href="https://instagram.com/tkmtalkies"><i className="fa fa-twitter nbm-logo"></i></a>&nbsp;&nbsp;
                                
                            </div>

                            <p className="artribute">© tkmtalkies</p>

                            
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  );
}

export default App;
