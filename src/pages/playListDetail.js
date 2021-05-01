import React, {Component} from 'react'
import LogoArea from './base/LogoArea'
import axios from 'axios'
import Moment from 'moment'
import * as SETTINGS from './constants/Settings'
import {Helmet} from 'react-helmet'
import LoveSong from './Firebase/LoveSong'
import SubmitPromo from './SubmitPromo'
import FeaturedRandom from './homePageComponents/FeaturedRandom'
import {connect} from 'react-redux'
import {playIt, addQueue} from '../redux/Queue/queue.actions'
import MyComments from './Firebase/MyComments'

class playListDetail extends Component {
  constructor(props) {
    super(props)
    this.playSong = this.playSong.bind(this)

    this.state = {
      notLoaded: true,
      liveTitle: 'Live Radio',
      title: '',
      publishedAtDate: '',
      publishedAtTime: '',
      content: '',
      liveAudio: SETTINGS.liveURL,
      liveCover: SETTINGS.liveCover,
      selectedTrack: 0,
      duration: '',
      cover: SETTINGS.liveCover,
      isEventPublished: true,
      tracks: [],
      comments: {},
      isLoggedIn: false,
      numberOfComments: 0,
      user: ' ',
      commentsLoaded: false,
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
      .get('https://api.thetkmshow.in/playlist/' + this.props.match.params.slug)

      .then((response) => {
        this.setState({
          notLoaded: false,
          title: response.data.title,
          publishedAtDate: response.data.publishedAtDate,
          publishedAtTime: response.data.publishedAtTime,
          content: response.data.content,
          audio: response.data.URL,
          cover: response.data['album-art'],

          duration: response.data.duration,
          tracks: response.data.songs,

          isEventPublished: response.data.isEventPublished,
        })
      })
      .then(this.check(this.state.publishedAtDate, this.state.publishedAtTime))
      .catch((error) => {
        window.location = "/listen"
        console.log(error)
        this.setState({
          notLoaded: true,
        })
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
 
  playSong(item, tracks) {
    this.props.playIt({
      audio: item.audio,
      cover: this.state.cover,
      title: item.title,
      vendor: 'audio',
      slug: '/playlist/' + this.props.match.params.slug + '/' + item.id,
      duration: item.duration,
    })
    tracks.slice(item.id - 1, 100).map((track) =>
      this.props.addQueue({
        audio: track.audio,
        cover: this.state.cover,
        title: track.title,
        vendor: 'audio',
        slug: '/playlist/' + this.props.match.params.slug + '/' + track.id,
        duration: track.duartion,
      })
    )
    this.setState({
      selectedTrack: item.id,
      liveAudio: item.audio,
      liveCover: this.state.cover,
      liveTitle: item.title,
    })
  }

  render() {
    const TRACKS = this.state.tracks

    const list = TRACKS.map((item) => {
      return (
        <tr
          key={item.id}
          style={{
            // fontWeight: item.title === this.state.selectedTrack && "bold",
            fontWeight:
              this.props.nowPlaying &&
              '/playlist/' + this.props.match.params.slug + '/' + item.id === this.props.nowPlaying.slug &&
              'bold',
            // color: item.id === this.state.selectedTrack && "green",
            backgroundColor:
              this.props.nowPlaying &&
              '/playlist/' + this.props.match.params.slug + '/' + item.id === this.props.nowPlaying.slug &&
              'rgba(44, 40, 174, 0.34)',
          }}>
          <th scope='row' onClick={() => this.playSong(item, this.state.tracks)}>
            {this.props.nowPlaying &&
            '/playlist/' + this.props.match.params.slug + '/' + item.id === this.props.nowPlaying.slug ? (
              <span class='material-icons'>play_circle_outline</span>
            ) : (
              item.id
            )}
          </th>
          <td style={{fontSize: '1rem'}} onClick={() => this.playSong(item, this.state.tracks)}>
            {item.title}
            <br />
            <span className='text-muted' style={{fontSize: '0.6rem'}}>
              {item.duration}
            </span>
          </td>
          <td className='text-center'>
            <LoveSong
              userid={this.state.user.uid}
              username={this.state.user.displayName}
              slug={this.props.match.params.slug}
              songId={item.id}
              google={() => this.auth('google')}
            />{' '}
          </td>
        </tr>
      )
    })

    return (
      <div style={this.conatiner}>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{this.state.selectedTrack == 0 ? this.state.title : this.state.liveTitle} | The TKM Show</title>
          <link rel='canonical' href={'https://thetkmshow.in/plalist/' + this.state.title} />
        </Helmet>
        <LogoArea />

        <div style={this.content}>
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
              <div class='col-sm-2'>
                <img src={this.state.cover} width='100%' className='roundedImage' alt='Poster'></img>
              </div>
              <div class='col-sm-10'>
                <div className=' p-2 pt-4 text-break'>
                  <div className={this.state.notLoaded ? '' : 'd-none'}>Loading.........</div>
                  <h4>{this.state.title}</h4>
                  <div class='d-flex flex-row bd-highlight mb-2' style={{fontSize: '10px', color: '#d0cccc'}}>
                    <div class='bd-highlight text-uppercase'>{this.state.duration}</div>
                    <div class='pl-2 bd-highlight text-uppercase'></div>
                  </div>
                  {/* <MainPlaylistPlayPause /> */}
                  <p style={{color: '#d0cccc'}} className='text-justify'>
                    {' '}
                    {this.state.content}
                    <div className={this.state.notLoaded ? '' : 'd-none'}>Loading....</div>
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-4 pb-4 pl-2 pr-2'>
              <table class='table table-dark' style={{backgroundColor: '#03022900', cursor: 'pointer'}}>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col text-right'></th>
                  </tr>
                </thead>
                <tbody>{list}</tbody>
              </table>
            </div>
          </div>
          <div style={this.secondaryContent}>
            <div style={this.secondaryContentInner}>
             
                <SubmitPromo />
                <MyComments slug={this.props.match.params.slug} />

              <FeaturedRandom />
            </div>
          </div>
        </div>

        <div className='media'></div>
      </div>
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
export default connect(mapStateToProps, {playIt, addQueue})(playListDetail)
