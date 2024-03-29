import React, {Component} from 'react'
import LogoArea from './base/LogoArea'
import {Media, Player, controls} from 'react-media-player'
import Moment from 'moment'
import FlotingPlayPause from './base/FlotingPlayPause'
import {Helmet} from 'react-helmet'
import {auth, providers} from '../utils/FirebaseSettings'
import * as SETTINGS from './constants/Settings'
import RecentlyPlayed from './homePageComponents/RecentlyPlayed'
import BottomNav from './base/BottomNav'
import VotingPage from './tedx/VotingPage'
import AdminPage from './tedx/AdminPage'

export default class TedxAdminList extends Component {
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: 'Live Radios',
      pageTitle: 'Loading..',
      hasBanner: false,
      bannerContent: {
        subOne: 'Read',
        heading: 'Magazine Name by Mechanical Department Published',
        subTwo: '',
        link: 'p/kettonam',
      },
      hasYoutube: false,
      youtubeLink: '',
      user: {},
      isLoggedIn: false,
    }

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({isLoggedIn: true, user})
        // console.log("------------------------------------");
        // console.log(user);
        localStorage.setItem('userid', this.state.user.uid)
      } else {
        this.setState({isLoggedIn: false, user: {}})
        localStorage.removeItem('userid')
      }
    })

    this.conatiner = {
      minHeight: '100vh',
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: 'white',
    }
    this.content = {
      marginLeft: '10%',
      marginRight: '10%',
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
    }
    this.itemHeading = {
      textAlign: 'left',
      fontSize: '10px',
      paddingTop: '15px',
      color: 'white',
    }
    this.infobox = {
      backgroundColor: SETTINGS.COLOURS.BRAND_BG,
      borderRadius: '5px',
      padding: '30px',
      marginTop: '10px',
    }
  }

  componentDidMount() {}
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
  auth(provider) {
    auth.signInWithPopup(providers[provider])
  }
  logout() {
    this.setState({isLoggedIn: false, user: {}})
    localStorage.removeItem('userid')
    window.location = '/vote'
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
          <title>Stage Management - TalenTEDx | The TKM Show</title>
          <link rel='canonical' href='https://thetkmshow.in/listen' />
        </Helmet>
        <div style={this.conatiner}>
          <LogoArea />
          <h3 style={{textAlign: 'center'}} className='pt-3 pb-3'>
          
            {'Stage Management - TalenTEDx'}
          </h3>
          <div className='ml-5 mr-5'>
            {!this.state.isLoggedIn && (
              <div className='signUpPrompt'>
                <div className='p-3'>
                  You are Anonymous!
                  <p className='text-muted text-small' style={{fontSize: '0.8rem'}}>
                    Login or create an account to vote your favorite candidate.
                  </p>
                  <button type='button' class='btn btn-outline-light' onClick={() => this.auth('google')}>
                    <i class='fa fa-google'></i> Login With Google
                  </button>
                </div>
                <div className='p-3'></div>
              </div>

              // </div>
            )}
          </div>

          <div style={this.infobox} className='ml-5 mr-5'>
            <div style={{marginTop: '30px', paddingBottom: '30px', textAlign: 'center'}}>
              <AdminPage page='library' uid={this.state.user.uid} />
            </div>
          </div>
          <div className='ml-5 mr-5'>
            <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}}></hr>
            {this.state.isLoggedIn && (
              <div className='signUpPrompt'>
                <div className='p-3'>
                  Logout
                  <p className='text-muted text-small' style={{fontSize: '0.8rem'}}>
                    Stay logged in to be in our community and to save your progress.
                  </p>
                  <button type='button' class='btn btn-outline-light' onClick={() => auth.signOut()}>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          <div style={this.content}>
            <div className='mt-2 mb-3'></div>

            <div className='mt-2 mb-3'></div>
            <div className='row'></div>
          </div>
        </div>
      </div>
    )
  }
}
