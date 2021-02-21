import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Moment from 'moment'
import * as SETTINGS from '../constants/Settings'

export default class ListenAfterLive extends Component {
  state = {
    title: '',
    slug: '',
    date: '',
    time: '',
    data: [],
  }
  mainContent = {
    textAlign: 'left',
    textDecoration: 'none',
    borderRadius: '5px',
    backgroundColor: SETTINGS.COLOURS.HEADER_COLOR,
    minHeight: '50px',
    isbannerOn: true,
  }

  inner = {
    padding: '20px',
    color: 'white',
  }
  componentDidMount() {
    axios
      .get('https://api.thetkmshow.in/notifications')
      .then((response) => {
        this.setState({
          isbannerOn: response.data.map((event) => event.isbannerOn),
        })
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('https://api.thetkmshow.in/alltracks')
      .then((response) => {
        this.setState({
          data: response.data,
        })
        // console.log(this.state.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const currentTime = Moment().format()
    const publishAt = this.state.date + 'T' + this.state.time + '+05:30'

    const a = Moment(publishAt)
    const b = Moment(currentTime)
    const myDiff = b.diff(a)

    const isBannerActive = myDiff > 0 && myDiff < 259200000 //displaybanner for 3*24 hr
    const timeAgo = Moment(publishAt).fromNow()

    return (
      <div>
        {this.state.data
          .filter((track) => track.isEventPublished ?? true)
          .slice(0, 1)
          .map((track) => (
            <Link key={track.slug} to={track.slug} className={true ? '' : 'd-none'}>
              <div style={this.mainContent} className='border border-primary'>
                <div style={this.inner}>
                  <span className='text-uppercase text-muted' style={{fontSize: '10px'}}>
                    Recent Episode
                  </span>
                  <div className='d-flex flex-row bd-highlight justify-content-between mb-2'>
                    <div className='bd-highlight'>
                      <h3 style={{fontSize: '19px', fontWeight: '500'}}>{track.title}</h3>
                      <span style={{fontSize: '10px'}} className='text-muted'>
                        Streamed Recently
                      </span>
                    </div>
                    <div style={{height: '100%', display: 'inline'}} className='bd-highlight align-middle'>
                      <span className='material-icons ' style={{fontSize: '38px'}}>
                        play_circle_outline
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    )
  }
}
