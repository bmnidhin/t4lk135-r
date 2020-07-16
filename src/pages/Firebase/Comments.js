import React, { Component } from "react";


import Comment from "./Comment";

class Comments extends Component {

  state={
    loaded : false,
  }
  renderComment(key, comment) {
    return <Comment key={key} comment={comment} />;
  }
  checkCommentLength(comments){
   if (comments.length === 0) {
     return true
   } else {
     return false
   }
  }
  render() {
    return (
      <div>
      <div className={this.checkCommentLength(this.props.comments)? 'd-none':'its working'}>
        <p>{this.props.comments.length}</p>
        {Object.keys(this.props.comments).reverse().map(key =>
          this.renderComment(key, this.props.comments[key])
        )}
      </div>
      <div className={this.checkCommentLength(this.props.comments)? '':'d-none'}>
      <p>No Comments. Post a comment Now</p>
     
    </div>
    </div>
    );
  }
}

export default Comments;