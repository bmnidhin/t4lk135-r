import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class PromoBanner extends Component {
    render() {
        return (
            <div className="pt-3 pb-3">
                <Link to={'/athena21'} target="_blank">
                <img src="https://thetkmshow.github.io/static/poster/athena.png" className="border border-warning roundedImage" width="100%"/>
                </Link>
            </div>
        )
    }
}
