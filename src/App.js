import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
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
// import base, { auth, providers } from './utils/FirebaseSettings'
import './App.css';

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
              <AppRoute exact path="/ground" component={test} />
            </Switch>
          )}
        />
        <FooterArea />
        <NavTest />
        
      </div>
    );
  }
}

export default App;
