import React, { Component } from 'react'
import base, { auth, providers , databased } from "../../utils/FirebaseSettings";
import OneFeatLiveChat from './OneFeatLiveChat';
export default class FeaturedLiveChat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            comments: {},
            isLoggedIn: false,
            user: "",
          };
          this.refComments = base.syncState( "live-comments", {
            context: this,
            
            state: "comments",
          });
    }
    
    render() {
        return (
            <div>
                <OneFeatLiveChat comments={this.state.comments}/>
            </div>
        )
    }
}
