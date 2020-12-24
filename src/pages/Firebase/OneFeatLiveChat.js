import React, { Component } from 'react'

import FtLive from './FtLive';


export default class OneFeatLiveChat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    renderComment(key, comment) {
        return (
          <FtLive
            key={key}
            comment={comment}
            id={key}
           />
        );
      }
    render() {
        return (
            <div>
              {Object.keys(this.props.comments)
            .slice(-2,-1)
            .map((key) =>
              this.renderComment(
                key,
                this.props.comments[key],
                
              )
            )}
            </div>
        )
    }
}
