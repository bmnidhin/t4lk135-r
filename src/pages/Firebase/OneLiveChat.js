import React from "react";
import Moment from "moment";
import { databased } from "../../utils/FirebaseSettings";
import Linkify from "react-linkify";

const OneLiveChat = (props) => {
  // const timestamp = props.comment.user.time
  const timestamp = props.comment.user.time;

  return (
    <div width="100%">
      <div className="d-flex bd-highlight">
        <div className="p-1 bd-highlight">
          <div
            className="rounded-circle"
            width="30px"
            height="30px"
            style={{
              backgroundColor: "#030229",
              backgroundImage: "url(" + props.comment.user.photo + ")",
              backgroundSize: "cover",
              width: "15px",
              height: "15px",
              color: "rgb(14, 14, 67)",
            }}
          >
            &nbsp;
          </div>
          {/*                       
                      <img
                        src={props.comment.user.photo}
                        className="rounded-circle"
                        width="30px"
                        alt="..."
                        onerror=""
                        
                        style={{backgroundColor:"#030229"}}
                      
                      /> */}
        </div>
        <div
          className="p-1 flex-grow-1 bd-highlight"
          style={{ maxWidth: "100%" }}
        >
         
          <div>
          <p  className="text-break" style={{width:"90%"}}>
          <span style={{ fontSize: "0.7rem" }}>
            <b>{props.comment.user.name} </b>
            <a className="text-muted">
              &nbsp;&nbsp; {Moment(timestamp).fromNow()}
              {""}{" "}
            </a>
          </span> &nbsp;
            <Linkify>
           
              {props.comment.status ? (
                <span
                  className="text-muted font-italics"
                  style={{ fontSize: "0.8rem", width: "90%" }}
                >
                  <i>
                  &nbsp; &nbsp; 🛇 This message is removed. [ thetkmshow.in/guidelines ]{" "}
                  </i>
                </span>
              ) : (
                <span
                  style={{ fontSize: "0.8rem", width: "90%" }}
                 
                >
                  &nbsp; &nbsp; {props.comment.comment}
                </span>
              )}
             
            </Linkify>
            </p>
            {/* Current User : {props.user} <br/>
                      commended by : {props.comment.user.uid} */}
          </div>

          <div
            className="d-flex flex-row bd-highlight  text-muted text-uppercase"
            style={{ fontSize: "0.6rem", cursor: "pointer" }}
          >
          
           
            <div className="pt-0  pr-3 bd-highlight">
              {props.user === props.comment.user.uid ? (
                <p
                  onClick={() => {
                    databased.ref(props.slug + "/" + props.id).remove();
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ fontSize: "0.6rem" }}
                  >
                    delete
                  </span>{" "}
                  Delete
                </p>
              ) : (
                " "
              )}
            </div>
            <div className="pt-0  pr-3 bd-highlight">
              {props.user === "888JP4sI2CNhMPUkepWonauXnNg1" ? (
                props.comment.status ? (
                  <p
                    onClick={() => {
                      databased
                        .ref(props.slug + "/" + props.id + "/status")
                        .remove();
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ fontSize: "0.6rem" }}
                    >
                      delete
                    </span>{" "}
                    Restore
                  </p>
                ) : (
                  <p
                    onClick={() => {
                      databased
                        .ref(props.slug + "/" + props.id + "/status")
                        .set({ removed: true });
                    }}
                  >
                    <span
                      className="material-icons"
                      style={{ fontSize: "0.6rem" }}
                    >
                      delete
                    </span>{" "}
                    Rules
                  </p>
                )
              ) : (
                " "
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <hr
     style={{ borderTop: "2px solid rgba(115, 110, 110, 0.1)" }}
   /> */}
    </div>
  );
};

export default OneLiveChat;
