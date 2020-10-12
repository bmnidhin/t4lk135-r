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
        // backgroundColor:"green",
        marginTop: "10px",
    };

    inner = {
        padding: "20px",
        color: "white",
    };

    render() {
        return (
            <div style={this.mainContent}>
                <span style={{paddingBottom:"10px"}}>Sponsored Content<Link to={"/why-ads"}> [?] </Link></span>
                <AdSense.Google
                   client='ca-pub-9394063465092952'
                   slot='6661146116'
                   style={{ display: 'block'}}
                   format='auto'
                   responsive='true'
                //    layoutKey='-fb+5w+4e-db+86'
                />
            </div>
        );
    }
}
// style="display:block"
//      data-ad-client="ca-pub-9394063465092952"
//      data-ad-slot="6661146116"
//      data-ad-format="auto"
//      data-full-width-responsive="true"