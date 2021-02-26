import React, {Component} from 'react'
import LogoArea from './base/LogoArea'
import {Media, Player, controls} from 'react-media-player'
import axios from 'axios'
import Moment from 'moment'
import FlotingPlayPause from './base/FlotingPlayPause'
import {Helmet} from 'react-helmet'
import * as SETTINGS from './constants/Settings'
import ClubAdvt from './base/ClubAdvt'
import BottomNav from './base/BottomNav'


export default class ClubPromoPage extends Component {
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    // this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: 'Live Radio',
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
      .get('https://api.thetkmshow.in/promo/' + this.props.match.params.slug)
      .then((response) => {
        console.log(response.data)
        this.setState({
          pageTitle: response.data.title,
          notLoaded: false,
          listen: response.data,
          hasBanner: response.data.hasBanner,
          bannerContent: response.data.bannerContent,
          hasYoutube: response.data.hasYoutube,
          youtubeLink: response.data.youtubeLink,
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
      <Media>
        <div>
          <Helmet>
            <meta charSet='utf-8' />
            <title>Listen | The TKM Show</title>
            <link rel='canonical' href='https://thetkmshow.in/listen' />
          </Helmet>
          <div style={this.conatiner}>
            <LogoArea />
            <div style={{marginTop: '30px', paddingBottom: '30px'}}>
              <h3 style={{textAlign: 'center'}}>{this.state.pageTitle}</h3>
            </div>
            <div style={this.content}>
              {this.state.hasBanner && (
                <ClubAdvt
                  top={this.state.bannerContent.subOne}
                  heading={this.state.bannerContent.heading}
                  link={this.state.bannerContent.link}
                  target='_blank'
                />
              )}
              <div className='mt-2 mb-3'></div>
              {/* <Adbanner/> */}

              {this.state.hasYoutube && (
                <iframe
                  width='100%'
                  height='300'
                  src={this.state.youtubeLink}
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              )}
              <div className='mt-2 mb-3'></div>
              <div className='row'></div>
            </div>
          </div>

          <BottomNav />
          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className='media'></div>
        </div>
      </Media>
    )
  }
}
