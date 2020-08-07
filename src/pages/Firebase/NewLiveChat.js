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
  style = {
    position: "fixed",
    bottom: "70px",
    right: "0px",
    left: "0px",
    zIndex: "9999",
    cursor: "pointer",
    backgroundColor: "white",
    height: "70px",
    width: "100%",
    fontSize: "20px",
    boxShadow: "#0a0a0a 0px -1px -11px 0px",
  };
  render() {
    return (
      <div>
        <div className="d-none d-lg-block">
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
                autoFocus={true}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-lg-none p-3" style={this.style}>
          <form onSubmit={this.handleSubmit}>
            <div class="input-group mb-3">
              <input
                type="text"
                placeholder={"Chat as " + this.props.user.displayName}
                className="form-control"
                ref="comment"
                // id="exampleFormControlTextarea1"
                id="validationDefault01"
                rows="1"
                onKeyDown={this.handleEnter}
                required
                maxLength="500"
                aria-describedby="button-addon2"
                autoFocus={true}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark"
                  type="submit"
                  id="button-addon2"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewLiveChat;
