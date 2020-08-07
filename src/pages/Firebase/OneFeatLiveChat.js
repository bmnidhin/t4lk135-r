import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Moment from "moment";
import FtLive from './FtLive';


export default class OneFeatLiveChat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    renderComment(key, comment, id) {
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
                Object.keys(this.props.comments[key]),
                
              )
            )}
            </div>
        )
    }
}
