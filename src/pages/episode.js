import React, { Component } from 'react'

export default class episode extends Component {
    render() {
        return (
            <div>
               <h1>episodes</h1> 
                <p>id : {this.props.match.params.slug}</p>
            </div>
        )
    }
}
