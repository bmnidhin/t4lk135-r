import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';



import './App.css';




// Views 
import Home from './views/Home';
import Listen from './views/Listen';
import Post from './views/Post'
import Playlist from './views/Playlist'
import PlayListAll from './views/PlayListAll';



function App() {
  
  return (

    <ScrollReveal
    // ref={childRef}
    children={() => (
      <Switch>
        <AppRoute exact path="/" component={Home}  />
        <AppRoute exact path="/listen" component={Listen}  />
        <AppRoute exact path="/listen/:slug" component={Post}/>
        <AppRoute exact path="/playlist/" component={PlayListAll}  />
        <AppRoute exact path="/playlist/:slug" component={Playlist}  />
      </Switch>
    )} />
    
  );
}

export default App;
