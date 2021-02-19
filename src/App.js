import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import test from "./pages/test";
import Homepage from "./pages/Homepage";
import listen from "./pages/listen";
import episode from "./pages/episode";
import playlists from "./pages/playlists";
import playListDetail from "./pages/playListDetail";
import CountDown from "./pages/base/CountDown";
import FooterArea from "./pages/base/FooterArea";
import NavTest from "./pages/base/NavTest";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
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
import MyHome from "./pages/MyHome";

import { connect } from 'react-redux';
import { playIt } from './redux/Queue/queue.actions';

import * as SETTINGS from './pages/constants/Settings';

import Play from "./pages/Play";
import FlotingPlayPause from "./pages/base/FlotingPlayPause";
import {
  Media,
  Player,
  controls,
  withMediaProps,
  utils,
} from "react-media-player";

class App extends Component {
 

    state = {
     title:'Live TV',
     audio: SETTINGS.liveURL,
     cover: SETTINGS.liveCover,
     vendor: 'audio'
     }
  
 
  render() {
    
    return (
      <div>
       
        
        <CountDown />
        
        <div style={{color:'#ffffff'}}>Count: {this.props.nowPlaying&&(this.props.nowPlaying.title)}</div>
      
        <ScrollReveal
          children={() => (
            <Switch>
             
              <Route exact 
                  path="/" 
                  component={() => <MyHome listen={this.state.listen} />}
             />

              <Route exact path="/listen" component={listen}/>
              <Route path="/listen/:slug" component={episode} />
              <Route path="/play/:slug" component={Play} />
              <Route  path="/watch/:slug" component={WatchEpisode} />

              <Route exact path="/playlist/" component={playlists} />
              <Route exact path="/playlist/:slug" component={playListDetail}/>

             
              <Route  path="/club99/:slug" component={ClubListen}/>
              <Route  path="/p/:slug" component={ClubPromoPage}/>
              <Route exact path="/library" component={MyLibrary}/>
              <Route exact path="/song-dedication" component={SongDedication}/>

              <Route exact path="/ground" component={test} />
              <Route exact path="/submit" component={Redirect} />
              <Route exact path="/live" component={Live} />
              <Route exact path="/privacy" component={Privacy} />
            
            </Switch>
          )}
        />
       
       
       <Media>
         <div>
            <Player
              src={this.props.nowPlaying ? this.props.nowPlaying.audio :this.state.audio}
              vendor={this.props.nowPlaying ?this.props.nowPlaying.vendor :this.state.vendor}
              autoPlay="false"
            />
            <FlotingPlayPause
            cover={this.props.nowPlaying ?this.props.nowPlaying.cover :this.state.cover}
            title={ this.props.nowPlaying ? this.props.nowPlaying.title : this.state.title }
          />
          </div>
         </Media>
        <FooterArea />
        {/* <NavTest /> */}
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
     count: state.counter.count,
     nowPlaying : state.queue.nowPlaying
   };
  };
  // const mapDispatchToProps = (dispatch) => {
  // return {
  //    increaseCounter: () => dispatch(increaseCounter(this.state.listen)),
  //    decreaseCounter: () => dispatch(decreaseCounter()),
  //   };
  // };
  export default connect( 
  
    mapStateToProps,
    {playIt},
   
   
    )(App);
