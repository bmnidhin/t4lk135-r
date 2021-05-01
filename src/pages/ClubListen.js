import React, {Component} from 'react'
// import NowPlaying from "./base/NowPlaying";
import {
  Media,
  Player,
  withMediaProps,
  // utils,
} from 'react-media-player'
import LogoArea from './base/LogoArea'
import axios from 'axios'
import Moment from 'moment'
// import { Link } from "react-router-dom";
import FlotingPlayPause from './base/FlotingPlayPause'
import MainPlayPause from './base/MainPlayPause'
import {Helmet} from 'react-helmet'
import FeaturedPosts from './homePageComponents/FeaturedPosts'
import NewComment from './Firebase/NewComment'
import Comments from './Firebase/Comments'
import base, {auth, providers, databased} from '../utils/FirebaseSettings'
import * as SETTINGS from './constants/Settings'
import ClubAdvt from './base/ClubAdvt'
import BottomNav from './base/BottomNav'
import FeaturedRandom from './homePageComponents/FeaturedRandom'
import {connect} from 'react-redux'

import {playIt, addQueue} from '../redux/Queue/queue.actions'
import MyComments from './Firebase/MyComments'

let qs = require('qs')
class ClubListen extends Component {
  constructor(props) {
    super(props)
    this.playSong = this.playSong.bind(this)

    this.queueAddHandler = this.queueAddHandler.bind(this)

    this.state = {
      notLoaded: true,
      liveTitle: 'Live Radio',
      title: '',
      publishedAtDate: '',
      publishedAtTime: '',
      content: '',
      liveAudio: SETTINGS.liveURL,
      liveCover: SETTINGS.liveCover,
      audio: SETTINGS.liveURL,
      duration: '',
      cover: SETTINGS.liveCover,
      isEventPublished: true,
      isEventNoPublishedBannerVisible: true,
      comments: {},
      isLoggedIn: false,
      numberOfComments: 0,
      user: ' ',
      commentsLoaded: false,
      hasPromo: false,
      promoContent: {
        subOne: 'Read',
        heading: 'Magazine Name by Mechanical Department Published',
        subTwo: '',
        link: 'p/kettonam',
      },
    }



    this.conatiner = {
      minHeight: '100vh',
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: 'white',
      paddingBottom: '50px',
    }
    this.infobox = {
      backgroundColor: SETTINGS.COLOURS.BRAND_BG,
      borderRadius: '5px',
      padding: '10px',
      marginTop: '10px',
    }
    this.content = {
      marginLeft: '5%',
      marginRight: '5%',
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
    axios
      .get('https://api.thetkmshow.in/clubs/' + this.props.match.params.slug)

      .then((response) => {
        this.setState({
          notLoaded: false,
          title: response.data.title,
          publishedAtDate: response.data.publishedAtDate,
          publishedAtTime: response.data.publishedAtTime,
          content: response.data.content,
          audio: response.data.URL,
          cover: response.data.cover,
          hasPromo: response.data.hasPromo,
          promoContent: response.data.promoContent,

          duration: response.data.duration,
          // cover: response.data.cover,
          isEventPublished: response.data.isEventPublished,
        })
        let autoplay = qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).autoplay
        let seekTo = qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).seek
        if (autoplay == 'true') {
          this.setState({
            liveAudio: response.data.URL,
            liveCover: response.data.cover,
            liveTitle: response.data.title,
          })
        }
      })
      .then(this.check(this.state.publishedAtDate, this.state.publishedAtTime))
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
    this.setState({
      isEventNoPublishedBannerVisible: isEventPublished,
    })
  }


  playSong() {
    this.props.playIt({
      audio: this.state.audio,
      cover: this.state.cover,
      title: this.state.title,
      vendor: 'audio',
      slug: '/club99/' + this.props.match.params.slug,
      duration: this.state.duration,
    })
    this.setState({
      liveAudio: this.state.audio,
      liveCover: this.state.cover,
      liveTitle: this.state.title,
    })
  }
  queueAddHandler() {
    if (true) {
      this.props.addQueue({
        audio: this.state.audio,
        cover: this.state.cover,
        title: this.state.title,
        vendor: 'audio',
        slug: '/club99/' + this.props.match.params.slug,
        duration: this.state.duartion,
      })
    }
  }
  render() {
    // const { className, style, media } = this.props;

    return (
      <Media>
        <div style={this.conatiner}>
          <Helmet>
            <meta charSet='utf-8' />
            <title>{this.state.title} | The TKM Show</title>
            <link rel='canonical' href={'https://thetkmshow.in/listen ' + this.props.match.params.slug} />
          </Helmet>
          <LogoArea />

          <div style={this.content} id='top' className='mt-3'>
            {this.state.hasPromo && (
              <ClubAdvt
                top={this.state.promoContent.subOne}
                heading={this.state.promoContent.heading}
                link={this.state.promoContent.link}
              />
            )}

            <div
              className={this.state.isEventNoPublishedBannerVisible ? '' : 'd-none'}
              style={{
                textAlign: 'center',
                fontSize: '10px',
                backgroundColor: '#0e0e43',
                borderRadius: '5px',
                padding: '10px',
                marginTop: '10px',
              }}>
              Not yet published. Listen after {this.state.publishedAtDate} &nbsp; {this.state.publishedAtDate}
            </div>
            <div style={this.infobox}>
              <div class='row'>
                <div class='col-sm-4'>
                  <img src={this.state.cover} width='100%' className='roundedImage' alt='Poster'></img>
                </div>
                <div class='col-sm-8'>
                  <div className=' p-2 pt-4 text-break'>
                    <div className={this.state.notLoaded ? '' : 'd-none'}>
                      {/* <Skeleton color="rgb(3, 2, 41,0.3)"/>
                  <Skeleton color="rgb(3, 2, 41,0.3)" width="10%"/> */}
                      Loading........
                    </div>

                    <div class='d-flex flex-row bd-highlight mb-2' style={{fontSize: '10px', color: '#d0cccc'}}>
                      <div class='bd-highlight text-uppercase'>CLUB99 Series</div>
                      <div class='pl-2 bd-highlight text-uppercase'></div>
                    </div>
                    <h4>{this.state.title}</h4>
                    <div class='d-flex flex-row bd-highlight mb-2' style={{fontSize: '10px', color: '#d0cccc'}}>
                      <div class='bd-highlight text-uppercase'>{this.state.duration}</div>
                      <div class='pl-2 bd-highlight text-uppercase'></div>
                    </div>
                    <MainPlayPause
                      slug={'/club99/' + this.props.match.params.slug}
                      nowPlaying={this.props.nowPlaying || 'live'}
                      switch={this.playSong}
                      addQueue={this.queueAddHandler}
                    />
                    <p style={{color: '#d0cccc'}} className='text-justify'>
                      {' '}
                      {this.state.content}
                      <div className={this.state.notLoaded ? '' : 'd-none'}>
                        {/* <Skeleton color="rgb(3, 2, 41,0.3)" rows={6}/> */}
                        Loading
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={this.secondaryContent}>
              <div style={this.secondaryContentInner}>
                <MyComments slug={this.props.match.params.slug}/>
                <FeaturedRandom />
                <div class='d-flex flex-column bd-highlight justify-content-end'>
                  <div class='p-2 bd-highlight'>
                    <a href='#top'>Scroll to top</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className='media'></div>

          <BottomNav selected='club' />
        </div>
      </Media>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    nowPlaying: state.queue.nowPlaying,
    myQueue: state.queue.myQueue,
  }
}
export default connect(mapStateToProps, {playIt, addQueue})(ClubListen)
