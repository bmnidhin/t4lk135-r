import React, {Component} from 'react'
import LogoArea from './base/LogoArea'
import {Media, Player, controls} from 'react-media-player'
import axios from 'axios'
import {Link} from 'react-router-dom'
import FlotingPlayPause from './base/FlotingPlayPause'
import {Helmet} from 'react-helmet'
import * as SETTINGS from './constants/Settings'
import BottomNav from './base/BottomNav'
import Placehold from './base/Placehold'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default class listen extends Component {
  constructor(props) {
    super(props)
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: 'Live Radio',
      listen: [],
      comments: {},
      isLoggedIn: false,
      user: '',
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
      .get('https://api.thetkmshow.in/alltracks')
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

  render() {
    return (
     
        <div>
          <Helmet>
            <meta charSet='utf-8' />
            <title>Listen | The TKM Show</title>
            <link rel='canonical' href='https://thetkmshow.in/listen' />
          </Helmet>
          <div style={this.conatiner}>
            <LogoArea />
            <div style={{marginTop: '30px', paddingBottom: '30px'}}>
              <h3 style={{textAlign: 'center'}}>Listen Again</h3>
            </div>
            <div style={this.content}>
              {/* <Adbanner/> */}
              <div className='row'>
                {this.state.listen.slice(0, 20).map(
                  (track) =>
                    track.isEventPublished && (
                      <div className={'col-6 col-md-3'} key={track.slug}>
                        <Link to={track.slug} className=''>
                        <LazyLoadImage effect="blur" src={track.cover} width='100%' className='roundedImage' alt='Poster'/>
                          <p style={this.itemHeading} className='text-truncate'>
                            {track.title}
                          </p>
                        </Link>
                      </div>
                    )
                )}
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
