import React, {Component} from 'react'
// import NowPlaying from "./base/NowPlaying";
// import { Link } from "react-router-dom";
import NewComment from './NewComment'
import Comments from './Comments'
import base, {auth, providers, databased} from '../../utils/FirebaseSettings'
import * as SETTINGS from '../constants/Settings'
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";



class MyComments extends Component {
  constructor(props) {
    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    

    this.state = {
      comments: {},
      isLoggedIn: false,
      numberOfComments: 0,
      user: ' ',
      commentsLoaded: false,
      rerender: false,
      isPlaying: false,
      isQueueAdded: false,
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
 
    this.refComments = base.syncState("comments/" +this.props.slug, {
      context: this,

      state: 'comments',
    })
    var starCountRef = databased.ref("comments/" +this.props.slug)
    starCountRef.on('value', (snapshot) => {
      let a = snapshot.numChildren()
      this.setState({commentsLoaded: true})
      // console.log(a);
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

      databased.ref("comments/" +this.props.slug + `/comm-${timestamp}` ).set(comment)

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
    const {className, style, media} = this.props
   
    
    
    return (
    
                  <div className='commentArea pt-5'>
                    {/* <Adbanner /> */}
                    {/* <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} /> */}
                    <div class='d-flex flex-row bd-highlight justify-content-between'>
                      <div class='p-2 bd-highlight'>
                        <p>POST A COMMENT</p>
                      </div>
                      <div class='p-2 bd-highlight'>{/* <a href="#bottom">Scroll to Bottom</a> */}</div>
                    </div>

                    <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} />

                    {this.state.isLoggedIn && (
                      <div class='d-flex bd-highlight'>
                        <div class='p-2 bd-highlight'>
                          <div
                            className='rounded-circle'
                            width='30px'
                            height='30px'
                            style={{
                              backgroundColor: 'rgb(14, 14, 67)',
                              backgroundImage: 'url(' + this.state.user.photoURL + ')',
                              backgroundSize: 'cover',
                              width: '40px',
                              height: '40px',
                              color: 'rgb(14, 14, 67)',
                            }}>
                            &nbsp;
                          </div>
                      
                        </div>
                        <div class='p-2 flex-grow-1 bd-highlight'>
                          <h6>
                            <b> {this.state.user.displayName} </b>
                            {/* <span onClick={() => auth.signOut()}>( Logout )</span> */}
                          </h6>
                          {this.state.commentsLoaded && <NewComment postNewComment={this.postNewComment} />}
                        </div>
                      </div>
                    )}
                    {!this.state.isLoggedIn && (
                      <div className='signUpPrompt'>
                        <div className='p-3'>
                          Login to Post a Comment
                          <p className='text-muted text-small' style={{fontSize: '0.8rem'}}>
                            Login or create an account to join our community
                          </p>
                          <Button
                variant="contained"
                color="primary"
                onClick={() => this.auth("google")}
                startIcon={<AccountCircleIcon />}
              >
                Login With Google
              </Button>
                        </div>
                      </div>
                    )}

                    <hr style={{borderTop: '3px solid rgba(115, 110, 110, 0.1)'}} />
                    {this.state.comments === {} ? (
                      ''
                    ) : (
                      <Comments
                        comments={this.state.comments}
                        slug={this.props.slug}
                        user={this.state.user.uid}
                        name={this.state.user.displayName}
                        login={this.state.isLoggedIn}
                        currentUser={this.state.user}
                      />
                    )}

                    <hr
                      id='bottom'
                      style={{
                        borderTop: '3px solid rgba(115, 110, 110, 0.1)',
                      }}
                    />
                  </div>

              
    )
  }
}

export default (MyComments)
