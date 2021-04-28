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
import GameRankBanner from './GameComponents.js/GameRankBanner'
import GameLeaderboardTop from './GameComponents.js/GameLeaderboardTop'

export default class GameListPage extends Component {
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
      paddingLeft:"10%",
      paddingRight:'10%',
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: 'white',
    }
    this.content = {
      marginLeft: '10%',
      marginRight: '10%',
    }
    this.itemHeading = {
      textAlign: 'center',
      fontSize: '10px',
      paddingTop: '15px',
      color: 'white',
    }
  }

  componentDidMount() {
    axios
      .get('')
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
          <title>Games | The TKM Show</title>
          <link rel='canonical' href='https://thetkmshow.in/games' />
        </Helmet>
        <div style={this.conatiner}>
          <LogoArea />
          <div style={{marginTop: '30px', paddingBottom: '30px'}}>
            <h3 style={{textAlign: 'center'}}>The TKM Show Games</h3>
          </div>
         <div className="mb-5">
         <GameRankBanner/>
         </div>
          <div style={this.content}>
            {/* <Adbanner/>   */}
            <div className='row mx-auto d-flex justify-content-center align-items-center'>
            
                <div className={'col-6 col-md-3'}>
                  <Link to={'/games/snake'} className=''>
                    <img src={"https://i.scdn.co/image/ab67616d00001e02a18d472ffdcb0bff0f00bceb"} width='100%' className='roundedImage' alt='Poster'></img>
                    <p style={this.itemHeading} className='text-truncate'>
                     Snake
                    </p>
                  </Link>
                </div>
                <div className={'col-6 col-md-3'}>
                  <Link to={'/games/flappy'} className=''>
                    <img src={"https://i.scdn.co/image/ab67616d0000b273fb9e3c127c96c101be84f34b"} width='100%' className='roundedImage' alt='Poster'></img>
                    <p style={this.itemHeading} className='text-truncate'>
                    Flappy Bird
                    </p>
                  </Link>
                </div>
          
            </div>
             <div className="mt-4 mb-6">
             <div style={{marginTop: '30px', paddingBottom: '30px'}}>
            <h4 style={{textAlign: 'center'}}>LeaderBoard</h4>
          </div>
              <GameLeaderboardTop gameName="Flappy"/>
              <GameLeaderboardTop gameName="Flappy"/>
             </div>
          </div>
        </div>
      </div>
    )
  }
}
