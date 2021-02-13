import React, { Component } from "react";

import Comment from "./Comment";
import { databased } from "../../utils/FirebaseSettings";
import Dedication from "./Dedication";

class Dedications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: "Loading",
    };
  }

  componentDidMount() {
    var starCountRef = databased.ref(this.props.slug);
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ counter: a });
     
    });
  }

  renderComment(key, comment, slug, user, name, currentUser) {
    return (
      <Dedication
        key={key}
        comment={comment}
        slug={slug}
        id={key}
        user={user ||'Anonymous'}
        name={name  ||'Anonymous'}
        currentUser={'Anonymous'}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {/* {this.state.counter==="loading" &&(
          <div className='p-3 text-center'>
            <h5>Comments Loading.....</h5>
          </div>
        )} */}
        
          {this.state.counter === 0 && (
            <div className="p-3 text-center">
              <h5>Be First to Dedicate a song</h5>
              {this.props.isAdmin && (
                  <h5>Be First to Dedicate a song</h5>
              )}
            </div>
          )}
          {this.state.counter !== 0 && (
            <div className="" style={{ fontSize: "0.9rem" }}>
              <p className="text-muted">{this.state.counter} Song Dedications</p>

              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
            </div>
          )}
            <div className="p-3 text-center">
             
             {!this.props.isAdmin && (
                 <h5>Dedications will be published at 7pm 14th Feb 21. </h5>
             )}
           </div>
          {this.props.isAdmin && (
             Object.keys(this.props.comments)
              .reverse()
              .map((key) =>
                this.renderComment(
                  key,
                  this.props.comments[key],
                  this.props.slug,
                  // this.props.user,
                  // this.props.name,
                  // this.props.currentUser
                )
              )
          )}
         
          {/* {JSON.stringify(Object.keys(this.props.comments))} */}
        </div>
      </div>
    );
  }
}

export default Dedications;
