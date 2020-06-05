
import React, { useState } from "react";
// import sections


import { Media, Player, controls, } from 'react-media-player'
import CustomPlayPause from '../components/CustomPlayPause'
import PodPlayer from '../components/PodPlayer'
import Navbar from '../components/Navbar'
import Herotext from '../components/Herotext';
import Footer from '../components/Footer';
import RecentPosters from '../components/RecentPosters';
import {Helmet} from "react-helmet";

const Appname= "The TKM Show";
// const { PlayPause, MuteUnmute,Volume, } = controls
// event One
let imageOne = require('../img/01.jpg');
let eventOneTitle ="Kamithaakal Aanoda inte preshnam";
let eventOneDescription ="";
let eventOneStartTime ="06/15/2020 08:00 AM";
let eventOneEndTime ="06/15/2020 10:00 AM";

// event Two
let imageTwo = require('../img/02.jpg');
let eventTwoTitle ="Kamithaakal";
let eventTwoDescription ="";
let eventTwoStartTime ="06/15/2020 08:00 AM";
let eventTwoEndTime ="06/15/2020 10:00 AM";

// event Three
let imageThree = require('../img/03.jpg');
let eventThreeTitle ="Kamithaakal";
let eventThreeDescription ="";
let eventThreeStartTime ="06/15/2020 08:00 AM";
let eventThreeEndTime ="06/15/2020 10:00 AM";


let podcastImgGoogle = require('../img/EN_Google_Podcasts_Badge_8x.png');
let podcastImgSpotify = require('../img/spotify-podcast-badge-wht-blk-165x40.png');
const timezone ="India/Kolkata";
const location ="Kollam Kerala India";

const Background = require('../img/wave.jpg');


let PodcastURL ="https://anchor.fm/s/249bf89c/podcast/play/14682808/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-3%2F79146503-44100-2-196672c664794.mp3";


let streamURL = "https://node-19.zeno.fm/7dpu3aargzzuv?rj-ttl=5&rj-tok=AAABcniqxPcAfj_wZNkMunG3eA";
const podtitle ="Stay Tuned..! Trial Episode"
const duration ="12" 
const art = 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/6042015/6042015-1591172558348-8d8b77870bd83.jpg';
const {
  
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
 
} = controls



const Listen = () => {
    

    const [stream, podcast] = useState(streamURL);
    const [streamControlls,PodcastControlls] = useState("hide")
    const [hideinfo,ShowInfo] = useState("show")
    

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Listen | The TKM Show</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="App">
      
    <Media>
        <div className="media">
        <div className="media-controls">
      <header className="App-header"style={{  
          // backgroundImage:  "url(" + Background + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          
        
          backgroundRepeat: 'no-repeat'
        }}>
          <Navbar/>
          {/* <h2>Listen</h2> */}
          {/* <Herotext/> */}
          
  
            <div className={hideinfo}>
              <h1>Listen To Trial Episode</h1>
              <input id="clickMe" type="button" value ="Listen To Podcast" onClick={() =>{podcast(PodcastURL);
                                                                         PodcastControlls("visible");
                                                                         ShowInfo("hide")}} />
            </div>
           
            <div className={streamControlls}>
             
            <PodPlayer
             art={art}
             podtitle ={podtitle}
             />
            
            <input id="clickMe" type="button" value ="Listen Live" onClick={() => {podcast(streamURL)
                                                           PodcastControlls("hide");
                                                           ShowInfo("show")}
                                                                      } />
              
           </div>
        
       <RecentPosters/>
     

  






      
     
      </header>
     
 
            
      
     
           <Player src={stream} autoPlay="true" vendor="audio"/>
          </div>
      <div className="media-controls">
      <CustomPlayPause />
 
    </div>
    </div>
    </Media>
    <Footer/>
    </div>
    
    </>
  );
}



export default Listen;