import React from 'react';
// import logo from './logo.svg';
import { Media, Player, } from 'react-media-player'
import CustomPlayPause from './Components/CustomPlayPause'
import Navbar from './Components/Navbar'

import './App.css';
import Herotext from './Components/Herotext';
import Footer from './Components/Footer';

const Appname= "The TKM Show";
// const { PlayPause, MuteUnmute,Volume, } = controls
// event One
let imageOne = require('./img/01.jpg');
let eventOneTitle ="Kamithaakal Aanoda inte preshnam";
let eventOneDescription ="";
let eventOneStartTime ="06/15/2020 08:00 AM";
let eventOneEndTime ="06/15/2020 10:00 AM";

// event Two
let imageTwo = require('./img/02.jpg');
let eventTwoTitle ="Kamithaakal";
let eventTwoDescription ="";
let eventTwoStartTime ="06/15/2020 08:00 AM";
let eventTwoEndTime ="06/15/2020 10:00 AM";

// event Three
let imageThree = require('./img/03.jpg');
let eventThreeTitle ="Kamithaakal";
let eventThreeDescription ="";
let eventThreeStartTime ="06/15/2020 08:00 AM";
let eventThreeEndTime ="06/15/2020 10:00 AM";


let podcastImgGoogle = require('./img/EN_Google_Podcasts_Badge_8x.png');
let podcastImgSpotify = require('./img/spotify-podcast-badge-wht-blk-165x40.png');
const timezone ="India/Kolkata";
const location ="Kollam Kerala India";

const Background = require('./img/wave.jpg');







function App() {
  
  return (
    <div className="App">
      
    
      <header className="App-header"style={{  
          backgroundImage:  "url(" + Background + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <Navbar/>
          <Herotext/>
        
        <div>
          {/* <a class=" tooltipped" data-position="top" data-tooltip="Coming Soon">
          <img src={podcastImgGoogle} height="40px"width="165" alt="Poadcast"></img>&nbsp;&nbsp;
          </a>
          <a class=" tooltipped" data-position="top" data-tooltip="I am a tooltip">
          <img src={podcastImgSpotify}height="40px"width="165"alt="Spotify"></img>
          </a> */}
        
        
        </div>
       <div className="nbm-img">
       <div className="section">

  
  <div className="row">
    <div className="col s12 m4">
      <div className="icon-block">
        
        <img src={imageOne} width="100%"className="nbm-poster" alt="Poster"></img>
        <br/><br/>
        {/* <div title="Add to Calendar" className="addeventatc"> 
          Add Event to Calendar
          <span className="start">{eventOneStartTime}</span>
          <span className="end">{eventOneEndTime}</span>
          <span className="timezone">{timezone}</span>
          <span className="title">{eventOneTitle}</span>
          <span className="description">{eventOneDescription}</span>
          <span className="location">{location}</span>
      </div><br/><br/> */}


        
      </div>
    </div>

    <div className="col s12 m4">
      <div className="icon-block">
        
      <img src={imageTwo} width="100%"className="nbm-poster" alt="Poster"></img>
      <br/><br/>
        {/* <div title="Add to Calendar" className="addeventatc"> 
          Add Event to Calendar
          <span className="start">{eventTwoStartTime}</span>
          <span className="end">{eventTwoEndTime}</span>
          <span className="timezone">{timezone}</span>
          <span className="title">{eventTwoTitle}</span>
          <span className="description">{eventTwoDescription}</span>
          <span className="location">{location}</span>
      </div><br/><br/> */}

       
      </div>
    </div>

    <div className="col s12 m4">
      <div className="icon-block">
        
      <img src={imageThree} width="100%"className="nbm-poster" alt="Poster"></img>
      <br/><br/>
        {/* <div title="Add to Calendar" className="addeventatc"> 
          Add Event to Calendar
          <span className="start">{eventThreeStartTime}</span>
          <span className="end">{eventThreeEndTime}</span>
          <span className="timezone">{timezone}</span>
          <span className="title">{eventThreeTitle}</span>
          <span className="description">{eventThreeDescription}</span>
          <span className="location">{location}</span>
      </div><br/><br/> */}

       
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
            <Player src="https://node-19.zeno.fm/7dpu3aargzzuv?rj-ttl=5&rj-tok=AAABcniqxPcAfj_wZNkMunG3eA" autoPlay="true" vendor="audio"/>
          </div>
      <div className="media-controls">
      <CustomPlayPause />
 
    </div>
    </div>
    </Media>
    <Footer/>
    </div>
  );
}

export default App;
