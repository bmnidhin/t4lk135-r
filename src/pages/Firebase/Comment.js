import React from "react";
import Moment from "moment";
import base, { auth, providers, databased } from '../../utils/FirebaseSettings'
import firebase from "firebase";




const Comment = props => {



// const timestamp = props.comment.user.time  
const timestamp = props.comment.user.time 

  return (
    <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight">
                      <div className="rounded-circle" width="30px" height='30px' 
                      
                      style={{backgroundColor :'rgb(14, 14, 67)',backgroundImage:"url("+props.comment.user.photo  +")",backgroundSize: "cover",width:'40px', height:'40px',color:'rgb(14, 14, 67)'}}
                      
                      >
                      &nbsp;
                      </div>
{/*                       
                      <img
                        src={props.comment.user.photo}
                        class="rounded-circle"
                        width="30px"
                        alt="..."
                        onerror=""
                        
                        style={{backgroundColor:"#030229"}}
                      
                      /> */}
                    </div>
                    <div class="p-2 flex-grow-1 bd-highlight">
                      <h6 style={{ fontSize: "0.7rem" }}>
                        <b>{props.comment.user.name  } </b>
                        <a className='text-muted'>&nbsp;&nbsp; {Moment(timestamp).fromNow()}{''} </a>
                      </h6>
                      <p style={{ fontSize: "0.8rem" }}>
                      {props.comment.comment  } 
                      </p>
                      {/* Current User : {props.user} <br/>
                      commended by : {props.comment.user.uid} */}
                      {JSON.stringify(props.comment  )}
                    {(props.user)=== props.comment.user.uid?   <p onClick={ ()=>{ databased.ref(props.slug +"/" + props.id).remove()}}>Delete</p> :" "}
                     
                    </div>  
                  </div>
                
    // <div className="card">
    //   {/* render a list of comments from comments component */}
    //   <img width="50px" src={props.comment.user.photo} alt="phoro"/>
    //   <h6 className="comment-user">{props.comment.user.name} :</h6>
    //   <p className="card-body"> {props.comment.comment} </p>
    //   {/* {console.log(props.comment)} */}
    // </div>
  );
};

export default Comment;