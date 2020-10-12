import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdSense from 'react-adsense';

export default class Adbanner extends Component {
    state = {
        title: "",
        slug: "",
        date: "",
        time: "",
    };
    mainContent = {
      
        marginTop: "10px",
    };

    inner = {
        padding: "20px",
        color: "white",
    };

    render() {
        return (
            <div style={this.mainContent}>
                <p>Sponsored Content<Link to={"/why-ads"}> [?] </Link></p>
                <AdSense.Google
                    client='ca-pub-9394063465092952'
                    slot='6499356404'
                    style={{ width:' 100%', height: 'auto', }}
                    format=''
                />
            </div>
        );
    }
}
{/* <AdSense.Google
                    client='ca-pub-9394063465092952'
                    slot='6499356404'
                    style={{ width:' 100%', height: 100, }}
                    format=''
                /> */}