import React, { Component } from "react";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postNewComment({
      comment: this.refs.comment.value
    });
    this.refs.comment.value = "";

  }
  handleEnter(event) {
    
    if (event.keyCode === 13) {
      if (this.refs.comment.value !== '') {
        this.props.postNewComment({
          comment: this.refs.comment.value
        });
      }
      
      this.refs.comment.value = "";
      event.preventDefault();
    }
  }
  render() {
    return (
     
        <form onSubmit={this.handleSubmit}>
        <textarea
                        placeholder="Type and Press Enter to comment"
                        className="form-control"
                        ref="comment"
                        // id="exampleFormControlTextarea1"
                        id="validationDefault01"
                        rows="1"
                        onKeyDown={this.handleEnter}
                        required
                        // autoFocus={true}
                        
                      ></textarea>
                      <div class="d-flex flex-row-reverse bd-highlight mb-3">
                        <div class="p-2 bd-highlight"> 

                        <button type="button" class="btn btn-dark" type="submit" >POST</button>

                        {/* <input type="submit" value="Submit" /> */}
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

export default NewComment;