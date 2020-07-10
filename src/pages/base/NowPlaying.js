import React, { Component } from 'react'

export default class NowPlaying extends Component {
    render() {
        return (
            <div>
                NowPlaying is {this.props.playing}

            </div>
        )
    }
}
