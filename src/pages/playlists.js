import React, { Component } from 'react'
import NowPlaying from './base/NowPlaying'
import LogoArea from './base/LogoArea'
import { Media, Player, controls } from "react-media-player";
import axios from "axios";
import Moment from "moment";
import { Link } from 'react-router-dom';
import FlotingPlayPause from './base/FlotingPlayPause';
import { Helmet } from "react-helmet";
import * as SETTINGS from './constants/Settings';
import Skeleton from '@yisheng90/react-loading';
// const settings = require("./API/settings.json");

const { PlayPause, MuteUnmute } = controls;
// let URL = settings.map((settings) => {
 
//   return settings.streamURL;
// });
// let liveCover = settings.map((settings) => {
 
//     return settings.liveCover;
//   });

export default class playlists extends Component {
    constructor(props) {
        super(props);  this.onChangeUsername = this.onChangeUsername.bind(this);
        
        
        this.state={
          notLoaded:true,
          url: SETTINGS.liveURL,
          cover:SETTINGS.liveCover,
           title: "Live Radio",
           listen:[]
        };

        this.conatiner={
          minHeight:"100vh",
          backgroundColor:'#030229',
          color:"white",
          

        }
        this.content={
          marginLeft:'10%',
          marginRight:'10%'

        }
        this.itemHeading={
          textAlign:"left",
          fontSize:"10px",
          paddingTop:"15px",
          color:"white",
        }
      }
    
      componentDidMount() {
        axios
          .get("https://api.thetkmshow.in/playlist")
          .then((response) => {
            this.setState({
              notLoaded:false,
              listen: response.data,
            });
          })
          .catch((error) => {
            this.setState({
              notLoaded:true,
            });
            console.log(error);
          });
      }
      check(date, time) {
        const publishedDate = date;
        const publishedTime = time;
        const currentTime = Moment().format();
        const publishAt = publishedDate + "T" + publishedTime + "+05:30";
    
        const a = Moment(publishAt);
        const b = Moment(currentTime);
        const myDiff = b.diff(a);
    
        const isEventPublished = myDiff > 0;
        const isBannerActive = myDiff > 0 && myDiff < 86400000; //displaybanner for 24 hr
        return isEventPublished;
      }

    onChangeUsername() {
        this.setState({
          playing: "aana"
        });
      }
    render() {
        return (
          <Media>
            <div>
                <Helmet>
                <meta charSet="utf-8" />
        <title>Playlists | The TKM Show</title>
        <link
          rel="canonical"
          href="https://thetkmshow.in/orma-undo-ee-mugham"
        />
                </Helmet>
            <div style={this.conatiner}>
              <LogoArea/>
               <div style={{marginTop:'30px',paddingBottom:'30px'}}>
                 <h3 style={{textAlign:"center"}}>Playlists</h3>
               </div>
                <div style={this.content}>
                    
                <div className="row">
          {this.state.listen.slice(0, 20).map((track) => (
            <div
              className={
                this.check(track.publishedAtDate, track.publishedAtTime)
                  ? "col-6 col-md-3"
                  : "col-6 col-md-3"
              }
              key={track.slug}
            >
              <Link to={"/playlist/" + track.slug} className="">
                <img
                  src={track['album-art']}
                  width="100%"
                  className="roundedImage"
                  alt="Poster"
                ></img>
                <p style={this.itemHeading} className='text-truncate'>{track.title}</p>
              </Link>
            </div>
          ))}
            <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          <Skeleton color="rgb(14, 14, 67)" height="200px"/>
           </div>
           <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          <Skeleton color="rgb(14, 14, 67)" height="200px"/>
           </div>
           <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          <Skeleton color="rgb(14, 14, 67)" height="200px"/>
           </div>
           <div className={this.state.notLoaded?"col-6 col-md-3":"d-none"}>
          <Skeleton color="rgb(14, 14, 67)" height="200px"/>
           </div>
        </div>
      
             

                </div>
                </div>
          <FlotingPlayPause cover={this.state.cover} title={this.state.title} />

          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
            <Player src={this.state.url} vendor="audio" autoPlay="true" />

          
            </div>
            </div>
            </Media>
        )
    }
}
