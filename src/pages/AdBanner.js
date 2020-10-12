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
                   slot='4365638345'
                   style={{ display: 'block'}}
                   format='fluid'
                   responsive='true'
                   layoutKey='-fb+5w+4e-db+86'
                />
            </div>
        );
    }
}
// style="display:block"
//      data-ad-format="fluid"
//      data-ad-layout-key="-fb+5w+4e-db+86"
//      data-ad-client="ca-pub-9394063465092952"
//      data-ad-slot="4365638345"