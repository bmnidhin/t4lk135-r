import React, { Component } from 'react'
import NowPlaying from './base/NowPlaying'
import LogoArea from './base/LogoArea'

export default class listen extends Component {
    constructor(props) {
        super(props);  this.onChangeUsername = this.onChangeUsername.bind(this);
        
        
        this.state={
            playing:"radios"
        };
      }
    

    onChangeUsername() {
        this.setState({
          playing: "aana"
        });
      }
    render() {
        return (
            <div>
              <LogoArea/>
                <h1>Listen Component</h1>
                <h1>slug is id : {this.props.match.params.slug}</h1>
                <button onClick={this.onChangeUsername}>Change</button>
                <NowPlaying playing={this.state.playing}/>
            </div>
        )
    }
}
