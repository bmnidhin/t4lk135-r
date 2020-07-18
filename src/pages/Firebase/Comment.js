import React from "react";
import Moment from "moment";
import base, { auth, providers, databased } from '../../utils/FirebaseSettings'
import firebase from "firebase";
import CommentLikes from "./CommentLikes";




const Comment = props => {



// const timestamp = props.comment.user.time  
const timestamp = props.comment.user.time
const currentUser = props.user 

  return (
    <div>
    <div class="d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <div
          className="rounded-circle"
          width="30px"
          height="30px"
          style={{
            backgroundColor: "rgb(14, 14, 67)",
            backgroundImage: "url(" + props.comment.user.photo + ")",
            backgroundSize: "cover",
            width: "40px",
            height: "40px",
            color: "rgb(14, 14, 67)",
          }}
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
          <b>{props.comment.user.name} </b>
          <a className="text-muted">
            &nbsp;&nbsp; {Moment(timestamp).fromNow()}
            {""}{" "}
          </a>
        </h6>
        <p style={{ fontSize: "0.8rem" }}>{props.comment.comment}</p>
        {/* Current User : {props.user} <br/>
                      commended by : {props.comment.user.uid} */}

        <div class="d-flex flex-row bd-highlight  text-muted text-uppercase"style={{ fontSize: "0.6rem",cursor:"pointer" }}>
          <div class="pt-0 pr-3 bd-highlight"><CommentLikes
          slug={props.slug}
          id={props.id}
          user={props.user}
          name={props.name}
          likes={props.comment.likes}
        />
        </div>
          <div class="pt-0 pr-3 bd-highlight"> </div>
          <div class="pt-0  pr-3 bd-highlight">{props.user === props.comment.user.uid ? (
          <p onClick={() => {databased.ref(props.slug + "/" + props.id).remove();}}>
            <span class="material-icons"style={{fontSize:"0.6rem"}}>delete</span> Delete Comment
          </p>) : (" ")}</div>
        </div>

        

        {/* steing {(props.comment.likes).find(element => element > 10)} */}

        
      </div>
     
    </div>
     {/* <hr
     style={{ borderTop: "2px solid rgba(115, 110, 110, 0.1)" }}
   /> */}
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