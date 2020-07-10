import React, { Component } from 'react'
import NowPlaying from './base/NowPlaying'
import LogoArea from './base/LogoArea'

export default class homepage extends Component {
    state={
        playing:"radio"
    }
    render() {
        return (
            <div>
                <LogoArea/>
                <h1>Homepage</h1>
                <NowPlaying playing={this.state.playing}/>
            </div>
        )
    }
}
