import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import test from "./pages/test";
import homepage from "./pages/homepage";
import listen from "./pages/listen";
import episode from "./pages/episode";
import playlists from "./pages/playlists";
import playListDetail from "./pages/playListDetail";
import CountDown from "./pages/base/CountDown";
import FooterArea from "./pages/base/FooterArea";
import NavTest from "./pages/base/NavTest";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

// import base, { auth, providers } from './utils/FirebaseSettings'
import './App.css';
import Redirect from "./pages/Redirect";
import Live from "./pages/homePageComponents/Live";
import ClubEpisodes from "./pages/ClubEpisodes";
import ClubPromoPage from "./pages/ClubPromoPage";
import ClubListen from "./pages/ClubListen";
import MagazineDownload from "./pages/MagazineDownload";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
}

  render() {
    return (
      <div>
       
        
        <CountDown />
        
        <ScrollReveal
          children={() => (
            <Switch>
             
              <AppRoute exact path="/" component={homepage} />

              <AppRoute exact path="/listen" component={listen}/>
              <AppRoute exact path="/listen/:slug" component={episode} />

              <AppRoute exact path="/playlist/" component={playlists} />
              <AppRoute exact path="/playlist/:slug" component={playListDetail}/>

              <AppRoute exact path="/club99/" component={ClubEpisodes} />
              <AppRoute exact path="/club99/:slug" component={ClubListen}/>
              <AppRoute exact path="/p/:slug" component={ClubPromoPage}/>

              <AppRoute exact path="/ground" component={test} />
              <AppRoute exact path="/submit" component={Redirect} />
              <AppRoute exact path="/live" component={Live} />
              <AppRoute exact path="/mech-magazine" component={MagazineDownload} />
            </Switch>
          )}
        />
        <FooterArea />
        {/* <NavTest /> */}
        
      </div>
    );
  }
}

export default App;
