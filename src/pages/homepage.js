import React, { Component } from 'react'
import NowPlaying from './base/NowPlaying'
import LogoArea from './base/LogoArea'
import HeroText from './homePageComponents/HeroText';
import ListenAfterLive from './homePageComponents/ListenAfterLive';
import RecentPosters from './homePageComponents/RecentPosters';
import FeaturedPosts from './homePageComponents/FeaturedPosts';
import FeaturedPlaylists from './homePageComponents/FeaturedPlaylists';
import FlotingPlayPause from './base/FlotingPlayPause';

const Background = require("./base/img/wave.jpg");

export default class homepage extends Component {
    state={
        playing:"radio"
    }

    heroarea={
        minHeight:"100vh",
        backgroundColor:"#030229",
        textAlign:"center",
        paddingBottom:"30px",
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    mainContent={
       
        textAlign:"center",
        marginLeft:"10%",
        marginTop:"30px",
        marginRight:"10%",
      
        minHeight:"100px"
    }
   secondaryContent={
       
        textAlign:"center",
        backgroundColor:"#030229",
        color:'white',
        
    }
    secondaryContentInner={
        paddingLeft:"10%",
        paddingTop:"50px",
        paddingBottom:"50px",
        paddingRight:"10%",
      
        minHeight:"100px"
    }
    render() {
        return (
            <div>
                <div style={this.heroarea}> 
                  <LogoArea/>
                  <HeroText/>
                  <div style={this.mainContent}>
                    <ListenAfterLive/>
                    <RecentPosters/>
                  </div>
                </div>
                <div style={this.secondaryContent}>
                   
                    <div style={this.secondaryContentInner}>
                    <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)',}}/>
                    <FeaturedPosts/>
                    <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)',}}/>
                    <FeaturedPlaylists/>
                    </div>
                   
                </div>
                <FlotingPlayPause/>
                
                {/* <NowPlaying playing={this.state.playing}/> */}
            </div>
        )
    }
}
