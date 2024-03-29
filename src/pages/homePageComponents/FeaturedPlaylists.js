import React, {Component} from 'react'
import axios from 'axios'
import Moment from 'moment'
import {Link} from 'react-router-dom'
import Placehold from '../base/Placehold'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class FeaturedPlaylists extends Component {
  state = {
    notLoaded: true,
    listen: [],
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
    const isBannerActive = myDiff > 0 && myDiff < 86400000 //displaybanner for 24 hr
    return isEventPublished
  }

  heading = {
    paddingTop: '20px',
    paddingBottom: '15px',
    textAlign: 'left',
  }
  itemHeading = {
    textAlign: 'left',
    fontSize: '10px',
    paddingTop: '15px',
    color: 'white',
  }
  render() {
    return (
      <div className='pt-3 pb-3'>
        <div className='d-flex flex-row bd-highlight justify-content-between mb-3'>
          <div className=' bd-highlight'>
            {' '}
            <span className='font-weight-bolder' style={this.heading}>
              PLAYLISTS
            </span>
          </div>
          <div className=' bd-highlight'>
            <Link to='/playlist'>VIEW ALL</Link>
          </div>
        </div>

        <div className='row'>
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
          {this.state.listen.slice(0, 5).map((track) => (
            <div className={track.isPublished ? 'col-6 col-md-3' : 'd-none'} key={track.slug}>
              <Link to={'/playlist/' + track.slug} className=''>
              <LazyLoadImage effect="blur" src={track['album-art']} width='100%' className='roundedImage' alt='Poster'/>
                <p style={this.itemHeading} className='text-truncate'>
                  {track.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
