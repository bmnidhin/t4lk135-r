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
import Privacy from "./pages/Privacy";
import MyLibrary from "./pages/MyLibrary";
import WatchEpisode from "./pages/WatchEpisode";
import SongDedication from "./pages/SongDedication";


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
             
              <Route exact path="/" component={homepage} />

              <Route exact path="/listen" component={listen}/>
              <Route exact path="/listen/:slug" component={episode} />
              <Route exact path="/watch/:slug" component={WatchEpisode} />

              <Route exact path="/playlist/" component={playlists} />
              <Route exact path="/playlist/:slug" component={playListDetail}/>

              <Route exact path="/club99/" component={ClubEpisodes} />
              <Route exact path="/club99/:slug" component={ClubListen}/>
              <Route exact path="/p/:slug" component={ClubPromoPage}/>
              <Route exact path="/library" component={MyLibrary}/>
              <Route exact path="/song-dedication" component={SongDedication}/>

              <Route exact path="/ground" component={test} />
              <Route exact path="/submit" component={Redirect} />
              <Route exact path="/live" component={Live} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/mech-magazine" component={MagazineDownload} />
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
