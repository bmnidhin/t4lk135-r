import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPhoto from '../Firebase/UserPhoto'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'
import Avatar from '@material-ui/core/Avatar';

const logo = require('./img/tkmshow_white.png')
const appName = 'thetkmshow'

export default class GameNav extends Component {
  constructor(props) {
    super(props)

    this.divStyle = {
      width: '100%',
      //   height: "45px",
      color: 'white',
      // backgroundColor: "#0E0E93",
      textAlign: 'center',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '15px',
    }
    this.imageStyle = {
      width: '15vh',
      height: 'auto',
      paddingTop: '10px',
    }
    this.table = {
      width: '100%',
    }
  }
  render() {
    return (
      <div style={this.divStyle} className='pl-4 pr-4 pt-3 pb-3 border-bottom border-white'>
        <table style={this.table}>
          <tbody>
            <tr>
              <td style={{width: '25%', fontSize: '15px', cursor: 'pointer'}} className="float-left">
              {this.props.imojilocal || ""}{' '}{this.props.localscore || ""}{' '}
              {this.props.imojihigh || ""}{' '}{this.props.highscore || 0}{' '}
              </td>
              <td style={{width: '40%'}}  className="float-middle">
                {this.props.username || "noname"}
              </td>
              <td style={{width: '25%'}}>
              <Avatar
              className="float-right"
                alt={this.props.userName || "noname"}
                src={this.props.avathar ||""}
              />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
