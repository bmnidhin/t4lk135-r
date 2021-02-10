import React from "react";
import Moment from "moment";
import { databased } from "../../utils/FirebaseSettings";
import CommentLikes from "./CommentLikes";
import Linkify from "react-linkify";
import ReplyComment from "./ReplyComment";
import coolImages from "cool-images";

const Dedication = (props) => {
  // const timestamp = props.comment.user.time
  const timestamp = props.comment.user.time;
  
  return (
    <div width="100%">
      <div className="d-flex bd-highlight">
        <div className="p-2 bd-highlight">
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
  
        </div>
        <div
          className="p-2 flex-grow-1 bd-highlight"
          style={{ maxWidth: "100%" }}
        >
          <h6 style={{ fontSize: "0.7rem" }}>
         
          </h6>
          <div>
          <Linkify properties={{target: '_blank'}}>
              {props.comment.status ? (
                <p
                  className="text-muted font-italics"
                  style={{ fontSize: "0.8rem", width: "90%" }}
                >
                  <i>
                    🛇 This message is removed. [ thetkmshow.in/guidelines ]{" "}
                  </i>
                </p>
              ) : (
                <p
                  style={{ fontSize: "0.8rem", width: "90%" }}
                  className="text-break text-justify"
                >
                  {props.comment.comment}   <a className="text-muted">
              &nbsp;&nbsp; - {Moment(timestamp).fromNow()}
              {""}{" "}
            </a>
                </p>
              )}
            </Linkify>

            {/* Current User : {props.user} <br/>
                      commended by : {props.comment.user.uid} */}
          </div>

        </div>
      </div>
      {/* <hr
     style={{ borderTop: "2px solid rgba(115, 110, 110, 0.1)" }}
   /> */}
    </div>
  );
};

export default Dedication;
