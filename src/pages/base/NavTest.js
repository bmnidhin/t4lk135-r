import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavTest extends Component {
    render() {
        return (
            <div>
                <Link to="/" className="navbar-brand">Home </Link>
                <Link to="/listen" className="navbar-brand">Albums </Link>
                <Link to="/playlist" className="navbar-brand">Playlists </Link>
            </div>
        )
    }
}
