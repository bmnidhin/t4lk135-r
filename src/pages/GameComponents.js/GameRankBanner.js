// Displays a Rank banner else a sigin button
import React, { Component } from 'react'

export default class GameRankBanner extends Component {
    state={
        isLoggedIn :true
    }
    render() {
        return (
            <div>
                    {this.state.isLoggedIn && (
              <div className='signUpPrompt'>
                <div className='p-3'>
                  You are Anonymous!
                  <p className='text-muted text-small' style={{fontSize: '0.8rem'}}>
                    Login or create an account to join our community and to save your progress
                  </p>
                  <button type='button' class='btn btn-outline-light' onClick={() => this.auth('google')}>
                    <i class='fa fa-google'></i> Login With Google
                  </button>
                </div>
                <div className='p-3'></div>
              </div>

              // </div>
            )}

            </div>
        )
    }
}
