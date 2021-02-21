import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPhoto from '../Firebase/UserPhoto'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'

const logo = require('./img/tkmshow_white.png')
const appName = 'thetkmshow'

export default class LogoArea extends Component {
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
      <div style={this.divStyle} className='pl-4 pr-4 pb-3 border-bottom border-white'>
        <table style={this.table}>
          <tbody>
            <tr>
              <td style={{width: '10%', fontSize: '25px', cursor: 'pointer'}}>
                <SwipeableTemporaryDrawer />
              </td>
              <td style={{width: '80%'}}>
                <Link to='/'>
                  <img src={logo} style={this.imageStyle} alt={appName}></img>
                </Link>
              </td>
              <td style={{width: '10%'}}>
                <UserPhoto />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
