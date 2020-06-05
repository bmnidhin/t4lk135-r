import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';



import './App.css';




// Views 
import Home from './views/Home';
import Listen from './views/Listen';




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

    <ScrollReveal
    // ref={childRef}
    children={() => (
      <Switch>
        <AppRoute exact path="/" component={Home}  />
        <AppRoute exact path="/listen" component={Listen}  />
      </Switch>
    )} />
    
  );
}

export default App;
