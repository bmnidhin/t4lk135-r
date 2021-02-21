import React, { Component } from 'react'
import * as SETTINGS from '../constants/Settings';

export default class Placehold extends Component {
    render() {
        let COLOR = this.props.colour || SETTINGS.COLOURS.BRAND_BG
        return (
            this.props.loaded && (
                <div style={{ height: this.props.height, width: this.props.width, backgroundColor: COLOR }} className="rounded mt-2 mb-2">
                    <br />
                </div>
            )

        )
    }
}
