import React, { Component } from 'react'
import LogoArea from './base/LogoArea'

export default class episode extends Component {
    render() {
        return (
            <div>
                <LogoArea/>
               <h1>episodes</h1> 
                <p>id : {this.props.match.params.slug}</p>
            </div>
        )
    }
}
