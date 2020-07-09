import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import test from "./pages/test";
import homepage from "./pages/homepage";
import listen from "./pages/listen";
import episode from "./pages/episode";
import playlists from "./pages/playlists";
import playListDetail from "./pages/playListDetail";
import CountDown from "./pages/base/CountDown";
import LogoArea from "./pages/base/LogoArea";
import NowPlaying from "./pages/base/NowPlaying";
import FooterArea from "./pages/base/FooterArea";
import NavTest from "./pages/base/NavTest";


class App extends Component {
  render() {
    return (
      <div>
       <Router>
         
        <div className="container">
          <CountDown/>
          <LogoArea/>
          <NavTest/>
         
          <Route path="/" exact component={homepage} />
          <Route path="/listen" component={listen} />
          <Route path="/listen/:slug" component={episode} />
          <Route path="/playlist/" component={playlists} />
          <Route path="/playlist/:slug"component={playListDetail} />
          <Route path="/ground" component={test} />

          <NowPlaying/>
          <FooterArea/>
        </div>
      </Router>

      </div>
     
    );
  }
}

export default App;







