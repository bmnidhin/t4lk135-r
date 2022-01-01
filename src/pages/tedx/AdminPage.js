// check login
// fetch list

import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import base, {auth} from '../../utils/FirebaseSettings'
// import Party from './assets/party.svg'
import Placehold from '../base/Placehold'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import VoteCard from './VoteCard'
import AdminCard from './AdminCard'

export default class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.login,
      user: {},
      notLoaded: true,
      listen: [],
      sliceAt: 4,
      participants: [],
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({isLoggedIn: true, user})
        // console.log("------------------------------------");
        //   console.log(user);
        localStorage.setItem('userid', this.state.user.uid)
      } else {
        this.setState({isLoggedIn: false, user: {}})
        localStorage.removeItem('userid')
      }
    })
  }

  componentDidMount() {
    this.refComments = base.syncState("tedx-greenroom", {
      context: this,

      state: 'participants',
    })
  }
  renderCard(key, participant) {
    return (
      <AdminCard key ={key} participant={participant}/>
    );
  }
  heading = {
    paddingTop: '20px',
    paddingBottom: '15px',
    textAlign: 'left',
    color: '#ffffff',
  }
  itemHeading = {
    textAlign: 'left',
    fontSize: '10px',
    paddingTop: '15px',
    color: 'white',
  }

  render() {
    return (
      <div>
       <div className='row'>
       {Object.keys(this.state.participants)
            .reverse()
            .map((key) =>
            this.renderCard(
              key,
              this.state.participants[key],
            )
            )}
      </div>
      </div>
    )
  }
}
