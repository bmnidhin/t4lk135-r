import React from 'react';
// import sections

import {Helmet} from "react-helmet";
import { Media, Player, } from 'react-media-player'
import CustomPlayPause from './components/CustomPlayPause'
import Navbar from './components/Navbar'
import Herotext from './components/Herotext';
import Footer from './components/Footer';

import RecentPosters from './components/RecentPosters';
import CountDown from './components/CountDown';


const Appname= "The TKM Show";
// const { PlayPause, MuteUnmute,Volume, } = controls
// event One


const Background = require('./img/wave.jpg');





const Home = () => {

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>The TKM Show</title>
        <link rel="canonical" href="https://thetkmshow.in" />
     </Helmet>
    <div className="App">
      
    
      <header className="App-header"style={{  
          backgroundImage:  "url(" + Background + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

          <Navbar/>
          <Herotext/>
        
         <CountDown/>
         {/* <p className="countdown"> Due to the unfortunate and untimely death of a faculty from the Architecture Dept, Prof. Jayakrishnan. We've decided to postpone the first episode of The TKM show which was to be aired today to a later date. We offer our deepest condolences to the family of the deceased.</p> */}
          
         
         
          
          <RecentPosters/>
      </header>
   {/* don't touch the code below this line       */}
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
      <div className="section-center">
         
      </div>
 
    </div>
    </div>
    </Media>
    <Footer/>
    </div>
    </>
  );
}

export default Home;