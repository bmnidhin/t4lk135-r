import React, { Component } from "react";
import ReactGA from 'react-ga';
import { Link } from "react-router-dom";
import base, { auth, providers, databased } from '../../utils/FirebaseSettings'
import {
    Media,
    Player,
    controls,
    withMediaProps,
    utils,
} from "react-media-player";

import CustomtCurrentTime from "./CustomtCurrentTime";
import { myLog } from "../../packages/logger/Logger";

const { formatTime } = utils;

const {
    PlayPause,
    CurrentTime,
    Progress,
    SeekBar,
    Duration,
    MuteUnmute,
    Volume,
    Fullscreen,
} = controls;

class BottomNav extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: "Live Radio",
            publishedAtDate: "",
            user: "",
            isLoggedIn: false,
            CurrentTime: "",

        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ isLoggedIn: true, user });
                // console.log("------------------------------------");
                // console.log(user);
                localStorage.setItem("userid", this.state.user.uid)
            } else {
                this.setState({ isLoggedIn: false, user: {} });
                localStorage.removeItem('userid')
            }
        });
        ReactGA.initialize('UA-168458070-1');

        ReactGA.event({
            category: 'Floting Player',
            action: 'Player Started',
            label: this.props.title,
            nonInteraction: true,
        })

    }

    componentDidUpdate({ media }) {
        myLog(this.state.isLoggedIn,
            this.state.user.displayName,
            this.state.user.userId,
            "Loaded Player - " + this.props.title,
            "Update",

        )

        ReactGA.event({
            category: 'Floting Player',
            action: 'Player Started',
            label: this.props.title,
            nonInteraction: true,
        })


    }
    shouldComponentUpdate({ media }) {
        return this.props.media.isPlaying !== media.isPlaying;

    }

    _handlePlayPause = () => {
        this.props.media.playPause()
        { this.props.media.isPlaying ? localStorage.setItem('autoplay', false) : localStorage.setItem('autoplay', true) }
        ReactGA.initialize('UA-168458070-1');

        ReactGA.event({
            category: 'Floting Player',
            action: 'Play Pause',
            label: this.props.title,
            nonInteraction: true
        });
    };

    style = {
        position: "fixed",
        bottom: "0px",
        right: "0px",
        left: "0px",
        zIndex: "99999",
        cursor: "pointer",
        backgroundColor: "white",
        height: "50px",
        width: "100%",
        //     boxShadow: "#0a0a0a 0px -1px 11px 0px"
    };

    active = {
        color: "blue",


    }
    hover = {
        color: "grey",


    }

    render() {

        return (

            <div style={this.style} className="shadow">
                <div className="pl-2 pr-2">
                    {/* large screen */}
                    <div class="d-none d-lg-block" >
                        <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
                            <div class="p-2 bd-highlight"  >
                                <Link to="/">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected == "home" ? this.active : this.hover}>
                                        <div class="p-2 bd-highlight">
                                            <span class="material-icons">
                                                home
                                        </span>
                                        </div>
                                        <div class="p-2 bd-highlight">Home</div>
                                    </div>
                                </Link>
                            </div>
                            <div class="p-2 bd-highlight">
                                <Link to="/listen">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected === "listen" ? this.active : this.hover}>
                                        <div class="p-2 bd-highlight" >
                                            <span class="material-icons">
                                                album
                                        </span>
                                        </div>
                                        <div class="p-2 bd-highlight">Listen</div>
                                    </div>
                                </Link>
                            </div>
                            <div class="p-2 bd-highlight">
                                <Link to="/playlist">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected === "playlist" ? this.active : this.hover}>
                                        <div class="p-2 bd-highlight">
                                            <span class="material-icons">
                                                library_music
                                        </span>
                                        </div>
                                        <div class="p-2 bd-highlight">Playlist</div>

                                    </div>
                                </Link>
                            </div>

                            <div class="p-2 bd-highlight">
                                <Link to="/library">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected === "library" ? this.active : this.hover}>
                                        <div class="p-2 bd-highlight">
                                            <span class="material-icons">
                                                explore
                                        </span>
                                        </div>
                                        <div class="p-2 bd-highlight">Library</div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* small screen */}
                    <div class=".d-none .d-sm-block .d-md-block d-lg-none text-center" style={{ lineHeight: "12px", }}>
                        <div class="d-flex flex-row bd-highlight mb-3 justify-content-between">
                            <div class="bd-highlight"  >
                                <Link to="/">
                                    <div class="p-2 bd-highlight" style={this.props.selected == "home" ? this.active : this.hover}>
                                        <div>
                                            <span class="material-icons">
                                                home
                                        </span>
                                            <br /> <span style={{ fontSize: "0.6rem" }}>Home</span>
                                        </div>

                                    </div>

                                </Link>
                            </div>
                            <div class="p-2 bd-highlight">
                                <Link to="/listen">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected === "listen" ? this.active : this.hover}>
                                        <div>
                                            <span class="material-icons">
                                                album
                                        </span>
                                            <br /> <span style={{ fontSize: "0.6rem" }}>Listen</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="p-2 bd-highlight">
                                <Link to="/playlist">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected === "playlist" ? this.active : this.hover}>
                                        <div>
                                            <span class="material-icons">
                                                library_music
                                        </span>
                                            <br /> <span style={{ fontSize: "0.6rem" }}>Playlist</span>
                                        </div>

                                    </div>
                                </Link>
                            </div>

                            <div class="p-2 bd-highlight">
                                <Link to="/library">
                                    <div class="d-flex flex-row bd-highlight mb-3" style={this.props.selected === "library" ? this.active : this.hover}>
                                        <div>
                                            <span class="material-icons">
                                                explore
                                        </span>
                                            <br /> <span style={{ fontSize: "0.6rem" }}>Library</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withMediaProps(BottomNav);
