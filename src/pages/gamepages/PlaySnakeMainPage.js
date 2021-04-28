import React, { Component } from 'react'
import PlaySnake from "./PlaySnake"

export default class PlaySnakeMainPage extends Component {
    render() {
        return (
            <div style={{maxWidth:"100%"}}>
                <PlaySnake/>
            </div>
        )
    }
}
