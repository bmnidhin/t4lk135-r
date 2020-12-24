import React, { Component } from 'react'
import { auth, providers } from '../../utils/FirebaseSettings'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default class UserPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            user:{}
        }
        auth.onAuthStateChanged(user => {
            if (user) {
              this.setState({ isLoggedIn: true, user });
              // console.log("------------------------------------");
              // console.log(user);
              localStorage.setItem("userid",this.state.user.uid)
            } else {
              this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
            }
          });
    }
   
    auth(provider) {
        auth.signInWithPopup(providers[provider]);
      }
      logout() {
        this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
       
      }
    render() {
        if(this.state.isLoggedIn){
            localStorage.setItem('userid', this.state.user.uid)
        }
        return (
            <div>
                {this.state.isLoggedIn && (
                    <Link to="/library">
                        <div
                          className="rounded-circle "
                          width="30px"
                          height="30px"
                          style={{
                            backgroundColor: "rgb(14, 14, 67)",
                            backgroundImage:
                              "url(" + this.state.user.photoURL + ")",
                            backgroundSize: "cover",
                            width: "30px",
                            height: "30px",
                            color: "rgb(14, 14, 67)",
                          }}
                        >
                          &nbsp;
                        </div>
                        </Link>
                  )}
                  {!this.state.isLoggedIn &&(
                      <Link to="/library">
                      <div
                      className="rounded-circle "
                      width="30px"
                      height="30px"
                      onClick={() => this.auth("google")}
                      style={{
                        backgroundColor: "rgb(14, 14, 67)",
                        backgroundImage:
                          "url(" + "https://firebasestorage.googleapis.com/v0/b/thetkmshowapi.appspot.com/o/general%2Fanonymous.jpg?alt=media" + ")",
                        backgroundSize: "cover",
                        width: "30px",
                        height: "30px",
                        color: "rgb(14, 14, 67)",
                        cursor: "pointer"
                        
                      }}
                    >
                      &nbsp;
                    </div>
                    </Link>
                  )}
                  <ToastContainer />
            </div>
        )
    }
}
