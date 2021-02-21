import React, { Component } from "react";
import LogoArea from "./base/LogoArea";
import { Media, Player, controls } from "react-media-player";
import axios from "axios";
import Moment from "moment";

import { Helmet } from "react-helmet";
import * as SETTINGS from './constants/Settings';
import ClubAdvt from "./base/ClubAdvt";
import BottomNav from "./base/BottomNav";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import {removeQueue } from '../redux/Queue/queue.actions';

class Queue extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.handleRemoveQueue = this.handleRemoveQueue.bind(this);
        // this.postNewComment = this.postNewComment.bind(this);

        this.state = {
            notLoaded: true,
            url: SETTINGS.liveURL,
            cover: SETTINGS.liveCover,
            title: "Live Radio",
            pageTitle: "Loading..",
            hasBanner: false,
            bannerContent: {
                "subOne": "Read",
                "heading": "Magazine Name by Mechanical Department Published",
                "subTwo": ""
                , "link": "p/kettonam"
            },
            hasYoutube: false,
            youtubeLink: "",

        };


        this.conatiner = {
            minHeight: "100vh",
            backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
            color: "white",
        };
        this.content = {
            marginLeft: "10%",
            marginRight: "10%",
        };
        this.itemHeading = {
            textAlign: "left",
            fontSize: "10px",
            paddingTop: "15px",
            color: "white",
        }
    }

    componentDidMount() {

    }

    onChangeUsername() {
        this.setState({
            playing: "aana",
        });
    }
    handleRemoveQueue = (track) => {

       
        this.props.removeQueue(
            {    
                type: 'remove',
                data :{
                    audio: track.audio,
                    cover: track.cover,
                    title: track.title,
                    vendor: 'audio',
                    slug: track.slug,
                    duration: track.duartion
                  }
            }
        )
    }
    render() {

        return (
            <Media>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Listen | The TKM Show</title>
                        <link rel="canonical" href="https://thetkmshow.in/listen" />
                    </Helmet>
                    <div style={this.conatiner}>
                        <LogoArea />

                        <div style={this.content} >
                            <div style={{ marginTop: "30px", paddingBottom: "30px" }}>
                                <h3 style={{ textAlign: "Left" }}>Queue</h3>
                                <h6 className={'text-muted'}>Now Playing</h6>
                                <table
                                    class="table table-dark mt-3 mb-3"
                                    style={{ backgroundColor: "#03022900", cursor: "pointer" }}
                                >
                                    
                                    <tbody>
                                        <tr
                                        >
                                            
                                            <td scope="row" style={{ width: "50px" }} >
                                                <img
                                                    src={this.props.nowPlaying.cover ?this.props.nowPlaying.cover :this.state.cover}
                                                    width="50px"
                                                    className="roundedImage"
                                                ></img>
                                            </td>
                                            <td style={{ fontSize: "1rem",width: "70%"}}

 
                                            > 
                                            <Link to={this.props.nowPlaying ?this.props.nowPlaying.slug :"/live"} style={{color:"white"}}>
                                            {this.props.nowPlaying.title ? this.props.nowPlaying.title : this.state.title}
                                            </Link>
                                                
                                        <br />
                                            </td>
                                            <td className="text-center">
                                            <span class="material-icons text-muted">
                                                more_vert
                                            </span>
                                            </td>
                                        </tr>

                                    </tbody>
                                    
                                </table>

                                 {this.props.queue.tracks &&(
                                      <h6 className={'text-muted'}>Up Next</h6>
                                 )}
                                 {this.props.queue.tracks &&(
                                     this.props.queue.tracks.slice(this.props.currentIndex+1, 100).map((track) => (
                                      this.props.nowPlaying.slug!== track.slug &&(
                                        
                                        <table
                                        key 
                                        class="table table-dark mt-3 mb-3"
                                        style={{ backgroundColor: "#03022900", cursor: "pointer" }}
                                    >
    
                                        <tbody>
                                            <tr
                                            >
                                                
                                                <td scope="row" style={{ width: "50px" }} >
                                                    <img
                                                        src={track.cover}
                                                        width="50px"
                                                        className="roundedImage"
                                                    ></img>
                                                </td>
                                                <td style={{ fontSize: "1rem",width: "70%" }}
    
    
                                                >
                                                     <Link to={track.slug} style={{color:"white"}}>
                                                     {track.title}
                                            </Link>
                                                   
                                            <br />
                                                </td>
                                                <td className="text-center">
                                                    <button onClick ={() => this.handleRemoveQueue(track)}>
                                                        Remove
                                                    </button>
                                                <span class="material-icons text-muted">
                                                more_vert
                                            </span>
                                                </td>
                                            </tr>
    
                                        </tbody>
    
                                    </table>
                                      )
                                       
                                     )))}
                            </div>
                            <div className="mt-2 mb-3" ></div>
                              {JSON.stringify(this.props.queue)}
                            <div className="mt-2 mb-3" ></div>
                            <div className="row">


                            </div>
                        </div>
                    </div>


                    <BottomNav />
                    {/* <NowPlaying playing={this.state.playing}/> */}
                    <div className="media">

                    </div>
                </div>
            </Media>
        );
    }
}
const mapStateToProps = (state) => {
    return {
       count: state.counter.count,
     
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
      {removeQueue},
     
     
      )(Queue);