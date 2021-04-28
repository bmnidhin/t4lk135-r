import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'

import {Media, Player, controls, withMediaProps, utils} from 'react-media-player'
import {PlayArrowOutlined, PlayCircleOutline} from '@material-ui/icons'
const {PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen} = controls

class MainPlayPause extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seekBar: false,
    }
  }

  style = {
    paddingTop: '10px',
    paddingBottom: '10px',
    cursor: 'pointer',
  }
  componentDidMount() {}
  render() {
    const {className, style, media} = this.props
    return (
      <div style={this.style} className='player'>
        <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} />

        <div className='d-flex flex-row bd-highlight'>
          <div className='p-2 bd-highlight'>
            <div>
              <Button
                variant='contained'
                color='primary'
                // size="large"
                className={'mr-2 mt-2'}
                onClick={this.props.switch}
                startIcon={<PlayCircleOutline />}>
                Play As Nidhin BM
              </Button>

              {/* <Button
                variant='outlined'
                className={'mr-2 mt-2'}
                startIcon={<PlaylistAddIcon />}
                onClick={this.props.addQueue}>
                Add to Queue
              </Button> */}
            </div>
          </div>
        </div>

        <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} />
      </div>
    )
  }
}
export default withMediaProps(MainPlayPause)
