import React, { Component } from "react";


import Comment from "./Comment";

class Comments extends Component {

 
  renderComment(key, comment, slug, id, user) {
    return <Comment key={key} comment={comment} slug={slug} id={key} user={user || ''}/>;
  }
 
  render() {
    return (
      <div>
      <div>

        {}
        
        {Object.keys(this.props.comments).reverse().map(key =>
          this.renderComment(key, this.props.comments[key], this.props.slug, Object.keys(this.props.comments[key]),this.props.user )
        )}
        {/* {JSON.stringify(Object.keys(this.props.comments))} */}
      </div>
      
    </div>
    );
  }
}

export default Comments;