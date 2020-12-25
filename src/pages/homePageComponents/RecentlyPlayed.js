import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { auth } from '../../utils/FirebaseSettings'
// import Skeleton from '@yisheng90/react-loading';
import Party from './assets/party.svg';

export default class RecentlyPlayed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : this.props.login,
            user:{},
            notLoaded: true,
            listen: [],
            sliceAt: 4
        }
        auth.onAuthStateChanged(user => {
            if (user) {
              this.setState({ isLoggedIn: true, user });
              // console.log("------------------------------------");
            //   console.log(user);
              localStorage.setItem("userid",this.state.user.uid)
              
            } else {
              this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
              
           
            }
          });
    }
   
    componentDidMount() {
       
        let uid =localStorage.getItem('userid') 
         
        if (uid ) {
            axios
            .get("https://v2.thetkmshow.in/v2/log/"+uid)
            .then((response) => {
                this.setState({
                    notLoaded: false,
                    listen: response.data,
                });

            })
            .catch((error) => {
                this.setState({
                    notLoaded: true,
                });
                console.log(error);
            });
        } else {
            let id = localStorage.getItem('anonymous')
            axios
            .get("https://v2.thetkmshow.in/v2/log/"+id)
            .then((response) => {
                this.setState({
                    notLoaded: false,
                    listen: response.data,
                });

            })
            .catch((error) => {
                this.setState({
                    notLoaded: true,
                });
                console.log(error);
            });
        }
       
    }


    heading = {
        paddingTop: "20px",
        paddingBottom: "15px",
        textAlign: "left",
        color: "#ffffff"
    }
    itemHeading = {
        textAlign: "left",
        fontSize: "10px",
        paddingTop: "15px",
        color: "white",
    }

    render() {
         
           
        

        return (
          
            <div>
                  {(this.props.page !="home" && this.state.listen.length==0 )&& (
                      <>
                      <p>Listen some episodes and it will appear here</p>
                      <img src={Party} alt="React Logo" width="20%"/> <br/><br/><br/>
                      <Link to="/listen">
                      <button
                          type="button"
                          className="btn btn-outline-light"
                         
                        >
                         Listen
                        </button>
                        </Link>
                        </>
                  )}
                  {this.state.listen.length!=0&&(
                    <div>
                        <div className="d-flex flex-row bd-highlight justify-content-between mb-3">
                    <div className=" bd-highlight"> <span className="font-weight-bolder" style={this.heading}>RECENTLY PLAYED</span></div>
                    <div className=" bd-highlight">

                        
                        {this.state.listen.length >4 &&(
                            <a onClick={() => this.setState({ sliceAt: 100 })}
                            style={{ cursor: "pointer" }}
                        > View All
                        
                        </a>
                            )}
                    </div>
                   
                </div>

                {this.state.listen.length==0 &&(<p className="text-muted text-center" style={{minHeight:"100px"}}>Listen Some episodes and it will appear here</p>)}
                <div className="row">

                    <div className={this.state.notLoaded ? "col-6 col-md-3" : "d-none"}>
                        {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
          Loading....
           </div>
                    <div className={this.state.notLoaded ? "col-6 col-md-3" : "d-none"}>
                        {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
          Loading....
           </div>
                    <div className={this.state.notLoaded ? "col-6 col-md-3" : "d-none"}>
                        {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}
          Loading....
           </div>
                    <div className={this.state.notLoaded ? "col-6 col-md-3" : "d-none"}>
                        {/* <Skeleton color="rgb(14, 14, 67)" height="200px"/> */}

                    </div>
                   
                     
                      
                   
                    {this.state.listen.slice(0, this.state.sliceAt).sort((b, a) => a.time - b.time).map((track) => (
                        <div
                            className={
                                true
                                    ? "col-6 col-md-3"
                                    : "d-none"
                            }
                            key={track.slug}
                        >
                            <a href={"/listen/" + track.slug}>
                                <img
                                    src={track.cover}
                                    width="100%"
                                    className="roundedImage"
                                    alt="Poster"
                                ></img>
                                <div className="progress" style={{ height: '0.3rem' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: track.progress + "%", backgroundColor: "#dc3545" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p style={this.itemHeading} className='text-truncate'>{track.title} {track.time}</p>
                            </a>
                        </div>
                    ))}

                </div>
                    </div>  
                  )}
                

            </div>
        );
    }
}
