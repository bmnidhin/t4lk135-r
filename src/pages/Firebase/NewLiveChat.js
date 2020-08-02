import React, { Component } from "react";

class NewLiveChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postNewComment({
      comment: this.refs.comment.value,
    });
    this.refs.comment.value = "";
  }
  handleEnter(event) {
    if (event.keyCode === 13) {
      if (this.refs.comment.value !== "") {
        this.props.postNewComment({
          comment: this.refs.comment.value,
        });
      }

      this.refs.comment.value = "";
      event.preventDefault();
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="input-group mb-3">
        <input
        type="text"
          placeholder="Type and Press Enter to Chat"
          className="form-control"
          ref="comment"
          // id="exampleFormControlTextarea1"
          id="validationDefault01"
          rows="1"
          onKeyDown={this.handleEnter}
          required
          maxLength="500"
          aria-describedby="button-addon2"
          // autoFocus={true}
         
        />
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Post</button>
  </div>
</div>
        
      
        {/* <textarea
          ref="comment"
          placeholder="Write your comment and press enter!"
          className="form-control"
          onKeyDown={this.handleEnter}
          autoFocus={true}
        />
        <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

export default NewLiveChat;
