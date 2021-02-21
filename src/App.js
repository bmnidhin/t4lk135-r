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
import { playIt,previousSong,nextSong,addQueue, removeQueue } from './redux/Queue/queue.actions';
import { ThemeProvider } from "@material-ui/styles";
import {
  CssBaseline,
  AppBar,
  Typography,
  createMuiTheme
} from "@material-ui/core";


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
import { createBrowserHistory } from 'history'
import Queue from "./pages/Queue";


const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
class App extends Component {
 

    state = {
     title:'Live TV',
     audio: SETTINGS.liveURL,
     cover: SETTINGS.liveCover,
     vendor: 'audio',
     currentIndex: 0,
     previousAudio:{},
     nextAudio:{}
     }
   handleNext = () => {
    let next = this.props.queue.tracks
     if (next !== undefined) {
       let calc = next[this.state.currentIndex +1]
       if (calc !==undefined) {
        this.setState({currentIndex:this.state.currentIndex+1})
        this.props.playIt(
          {
            audio: calc.audio,
            cover: calc.cover,
            title: calc.title,
            vendor: 'audio',
            slug: calc.slug,
            duration:calc.duration
          }
        )
       } else {
       //return back to Live if queue is empty
       this.props.playIt(
        {
          audio: SETTINGS.liveURL,
          cover: SETTINGS.liveCover,
          title: "Live Radio",
          vendor: 'audio',
          slug: "/live",
          duration:""
        }
      )
       }
       
     } else {
      //return back to Live if queue is empty
      this.props.playIt(
        {
          audio: SETTINGS.liveURL,
          cover: SETTINGS.liveCover,
          title: "Live Radio",
          vendor: 'audio',
          slug: "/live",
          duration:""
        }
      )
     }

     }
     handlePrevious = () => {
      let next = this.props.queue.tracks
      if (next !== undefined) {
        let calc = next[this.state.currentIndex -1]
        if (calc !==undefined && this.state.currentIndex -1 >=0) {
         this.setState({currentIndex:this.state.currentIndex-1})
         this.props.playIt(
           {
             audio: calc.audio,
             cover: calc.cover,
             title: calc.title,
             vendor: 'audio',
             slug: calc.slug,
             duration:calc.duration
           }
         )
        } else {
        //return back to Live if queue is empty
       this.props.playIt(
        {
          audio: SETTINGS.liveURL,
          cover: SETTINGS.liveCover,
          title: "Live Radio",
          vendor: 'audio',
          slug: "/live",
          duration:""
        }
      )
        }
        
      } else {
       //return back to Live if queue is empty
       this.props.playIt(
        {
          audio: SETTINGS.liveURL,
          cover: SETTINGS.liveCover,
          title: "Live Radio",
          vendor: 'audio',
          slug: "/live",
          duration:""
        }
      )
      }
     


     }
 
  render() {
    
    return (
      <div>
       
       <ThemeProvider theme={theme}>
      <CssBaseline />
        <CountDown />
      
        <ScrollReveal
          children={() => (
            <Switch>
             
              <Route exact 
                  path="/" 
                  component={() => <MyHome/>}
             />
             <Route exact 
                  path="/queue" 
                  component={() => <Queue  
                  
                  queue ={this.props.queue}
                  nowPlaying ={this.props.nowPlaying || {slug:"/live"}}
                  currentIndex = {this.state.currentIndex}
                  />}
             />
              <Route exact path="/listen" component={listen}/>
              <Route path="/listen/:slug" component={episode} />
              <Route path="/play/:slug" component={Play} />
              <Route  path="/watch/:slug" component={WatchEpisode} />

              <Route exact path="/playlist/" component={playlists} />
              <Route path="/playlist/:slug" component={playListDetail}/>

             
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
                src={this.props.nowPlaying ? this.props.nowPlaying.audio :this.state.audio}
                cover={this.props.nowPlaying ?this.props.nowPlaying.cover :this.state.cover}
                title={ this.props.nowPlaying ? this.props.nowPlaying.title : this.state.title }
                slug ={this.props.nowPlaying ? this.props.nowPlaying.slug :"/live"}
                nextSong ={this.handleNext}
                queue ={this.props.queue}
                previousSong ={this.handlePrevious}
                currentIndex = {this.state.currentIndex}
             
          />
          </div>
         </Media>
        <FooterArea />
        {/* <NavTest /> */}
        </ThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
     count: state.counter.count,
     nowPlaying : state.queue.nowPlaying,
     myNextSong : state.queue.nextSong,
     myPreviousSong: state.queue.previousSong,
     queue : state.queue.myQueue
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
    {playIt,previousSong,nextSong,addQueue, removeQueue},
   
   
    )(App);
