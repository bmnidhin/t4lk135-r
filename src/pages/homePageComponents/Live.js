import React, {Component} from 'react'
import LogoArea from '../base/LogoArea'
import {Media, Player} from 'react-media-player'

import FlotingPlayPause from '../base/FlotingPlayPause'
import {Helmet} from 'react-helmet'

import base, {auth, providers, databased} from '../../utils/FirebaseSettings'
import * as SETTINGS from '../constants/Settings'
// import Skeleton from "@yisheng90/react-loading";
import {animateScroll} from 'react-scroll'
import AllLiveChats from '../Firebase/AllLiveChats'
import NewLiveChat from '../Firebase/NewLiveChat'
import FeaturedPosts from './FeaturedPosts'
import ClubAdvt from '../base/ClubAdvt'
import BottomNav from '../base/BottomNav'
const Background = require('../base/img/wave.jpg')

export default class Live extends Component {
  constructor(props) {
    super(props)
    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: 'Live Radio',
      comments: {},
      isLoggedIn: false,
      notLoaded: true,
      user: '',
      commentsLoaded: false,
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
      // backgroundImage: "url(" + Background + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'white',
    }
    this.conatinerInner = {
      backgroundColor: SETTINGS.COLOURS.BRAND_BG,
      minHeight: '24vh',
      borderRadius: '5px',
      width: '100%',
    }
    this.secondaryContent = {
      textAlign: 'center',
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: 'white',
    }
    this.secondaryContentInner = {
      // paddingLeft: "10%",
      // paddingTop: "50px",
      // paddingBottom: "50px",
      // paddingRight: "10%",
      // minHeight: "100px",
    }
  }
  componentDidMount() {
    this.scrollToBottom()
    this.refComments = base.syncState("comments/" +'live-comments', {
      context: this,

      state: 'comments',
    })
    this.setState({notLoaded: false})
    var starCountRef = databased.ref("comments/" +'live-comments')
    starCountRef.on('value', (snapshot) => {
      let a = snapshot.numChildren()
      this.setState({commentsLoaded: true})
      // console.log(a);
    })
  }
  componentDidUpdate() {
    this.scrollToBottom()
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'dcroll',
    })
  }
  postNewComment(comment) {
    const timePublished = Date.now()
    if (this.state.user.uid === '' || this.state.user.displayName === '' || this.state.user.photoURL === '') {
      alert('Unable to Post Comment. Try Again!!!')
    } else {
      comment.user = {
        uid: this.state.user.uid,
        name: this.state.user.displayName,
        time: timePublished,
        photo: this.state.user.photoURL,
      }
      const comments = {
        ...this.state.comments,
      }

      const timestamp = Date.now()
      comments[`comm-${timestamp}`] = comment
      
      databased.ref("comments/" +`live-comments/comm-${timestamp}` ).set(comment)
    
      // this.setState({
      //   comments: comments,

      // });
    }
  }
  auth(provider) {
    auth.signInWithPopup(providers[provider])
  }
  logout() {
    this.setState({isLoggedIn: false, user: {}})
    localStorage.removeItem('userid')
  }
  render() {
    return (
      <Media>
        <div>
          <Helmet>
            <meta charSet='utf-8' />
            <title>Live Radio | The TKM Show</title>
            <link rel='canonical' href='https://thetkmshow.in/live' />
          </Helmet>
          <div style={this.conatiner}>
            <LogoArea />

            <div className='pl-2 pr-2  d-block d-sm-none'>
              {/* <ClubAdvt top={"Read & Watch"} heading={"Check out a video by SAE BAJA TKMCE and the Annual Magazine of Mechanical Department"} link={"p/sae-tkmce"}/> */}
              {/* <ClubAdvt top={"Read"} heading={"Check out the annual magazine of Mechanical Department"} link={"mech-magazine"}/>       */}
            </div>
            <div className='pl-1 pr-1 mt-3 pb-10'>
              <div className='container mt-1 p-3 pr-2 pl-2 pb-3' style={this.conatinerInner}>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='d-none d-lg-block'>
                      <img
                        src='https://bmnidhin.github.io/t4lk-static/s1/live.jpg'
                        alt='Live'
                        width='100%'
                        className='roundedImage'
                      />
                    </div>
                    <div className='d-lg-none'>
                      <img
                        src='https://bmnidhin.github.io/t4lk-static/s1/live2.jpg'
                        alt='Live'
                        width='100%'
                        className='roundedImage'
                      />
                    </div>
                  </div>
                  <div className='col-12 col-md-8'>
                    <h6 className='pt-3'>Live Chat</h6>
                    <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} />
                    <div
                      className='live-comments fixed-bottom'
                      id='dcroll'
                      style={{fontSize: '0.7em', overflowX: 'hidden'}}>
                      <AllLiveChats
                        comments={this.state.comments}
                        slug='live-comments'
                        user={this.state.user.uid}
                        name={this.state.user.displayName}
                        login={this.state.isLoggedIn}
                        currentUser={this.state.user}
                      />
                    </div>
                    <div className='mt-2'>
                      <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} />

                      {this.state.isLoggedIn && (
                        <div class='d-flex bd-highlight'>
                          <div class='p-2 bd-highlight'>
                            <div
                              className='rounded-circle'
                              style={{
                                backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
                                backgroundImage: 'url(' + this.state.user.photoURL + ')',
                                backgroundSize: 'cover',
                                width: '25px',
                                height: '25px',
                                color: 'rgb(14, 14, 67)',
                              }}>
                              &nbsp;
                            </div>
                            {/* <img
                        src={this.state.user.photoURL}
                        class="rounded-circle"
                        width="30px"
                        alt="..."
                      /> */}
                          </div>

                          <div class='p-2 flex-grow-1 bd-highlight'>
                            <h6 style={{fontSize: '0.7em'}}>
                              <b> {this.state.user.displayName} </b>
                              <span onClick={() => auth.signOut()}>( Logout )</span>
                            </h6>

                            {/* {JSON.stringify(this.state.user)} */}
                          </div>
                        </div>
                      )}

                      {this.state.isLoggedIn && this.state.commentsLoaded && (
                        <NewLiveChat postNewComment={this.postNewComment} user={this.state.user} />
                      )}
                      {!this.state.isLoggedIn && (
                        <div className='signUpPrompt'>
                          <div className='p-3'>
                            Join Live Chat!
                            <p className='text-muted text-small' style={{fontSize: '0.8rem'}}>
                              Login or create an account to join our community
                            </p>
                            <button type='button' class='btn btn-outline-light' onClick={() => this.auth('google')}>
                              <i class='fa fa-google'></i> Login With Google
                            </button>
                          </div>
                        </div>

                        // <div className="alert alert-dark">
                        //   <h1 className="title">ReactJS Comments App</h1>
                        //   <label className="sign-in">Sign in: </label>
                        //   <button
                        //     className="btn btn-danger"
                        //     onClick={() => this.auth("google")}
                        //   >

                        //     google
                        //   </button>
                        // </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pb-3' style={{backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0, color: 'ffffff'}}>
            &nbsp;
            <div style={{paddingLeft: '8%', paddingRight: '8%'}}>
              <FeaturedPosts />
            </div>
          </div>

          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className='media'></div>
        </div>
      </Media>
    )
  }
}
