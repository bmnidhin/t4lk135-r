import React, {Component} from 'react'
import LogoArea from './base/LogoArea'
import {Media, Player, controls} from 'react-media-player'
import axios from 'axios'
import Moment from 'moment'
import {Link} from 'react-router-dom'
import FlotingPlayPause from './base/FlotingPlayPause'
import {Helmet} from 'react-helmet'
import * as SETTINGS from './constants/Settings'
import BottomNav from './base/BottomNav'
import Placehold from './base/Placehold'

export default class playlists extends Component {
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this)

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: 'Live Radio',
      listen: [],
    }

    this.conatiner = {
      minHeight: '100vh',
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: 'white',
    }
    this.content = {
      marginLeft: '10%',
      marginRight: '10%',
    }
    this.itemHeading = {
      textAlign: 'left',
      fontSize: '10px',
      paddingTop: '15px',
      color: 'white',
    }
  }

  componentDidMount() {
    axios
      .get('https://api-thetkmshow.vercel.app/playlist')
      .then((response) => {
        this.setState({
          notLoaded: false,
          listen: response.data,
        })
      })
      .catch((error) => {
        this.setState({
          notLoaded: true,
        })
        console.log(error)
      })
  }
  check(date, time) {
    const publishedDate = date
    const publishedTime = time
    const currentTime = Moment().format()
    const publishAt = publishedDate + 'T' + publishedTime + '+05:30'

    const a = Moment(publishAt)
    const b = Moment(currentTime)
    const myDiff = b.diff(a)

    const isEventPublished = myDiff > 0
    return isEventPublished
  }

  onChangeUsername() {
    this.setState({
      playing: 'aana',
    })
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Playlists | The TKM Show</title>
          <link rel='canonical' href='https://thetkmshow.in/playlist' />
        </Helmet>
        <div style={this.conatiner}>
          <LogoArea />
          <div style={{marginTop: '30px', paddingBottom: '30px'}}>
            <h3 style={{textAlign: 'center'}}>Playlists</h3>
          </div>
          <div style={this.content}>
            {/* <Adbanner/>   */}
            <div className='row'>
              {this.state.listen.slice(0, 20).map((track) => (
                <div className={track.isPublished ? 'col-6 col-md-3' : 'd-none'} key={track.slug}>
                  <Link to={'/playlist/' + track.slug} className=''>
                    <img src={track['album-art']} width='100%' className='roundedImage' alt='Poster'></img>
                    <p style={this.itemHeading} className='text-truncate'>
                      {track.title}
                    </p>
                  </Link>
                </div>
              ))}
              <div className='col-6 col-md-3'>
                <Placehold width='100%' height='200px' loaded={this.state.notLoaded} />
              </div>
              <div className='col-6 col-md-3'>
                <Placehold width='100%' height='200px' loaded={this.state.notLoaded} />
              </div>
              <div className='col-6 col-md-3'>
                <Placehold width='100%' height='200px' loaded={this.state.notLoaded} />
              </div>
              <div className='col-6 col-md-3'>
                <Placehold width='100%' height='200px' loaded={this.state.notLoaded} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
