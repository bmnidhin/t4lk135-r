import React, { Component } from "react";
import base, { auth, providers, databased } from "../../utils/FirebaseSettings";
import NewComment from "./NewComment";
import AllReplyComments from "./AllReplyComments";

export default class ReplyComment extends Component {
  constructor(props) {
    super(props);
    this.postNewComment = this.postNewComment.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.expandArea = this.expandArea.bind(this);
    this.hideArea = this.hideArea.bind(this);
    this.state = {
      comments: {},
      isLoggedIn: false,
      user: " ",
      counter: "loading",
      areaExpanded: false,
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
        // console.log("------------------------------------");
        // console.log(user);
        localStorage.setItem("userid",this.state.user.uid)
      } else {
        this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
      }
    });
  }
  componentDidMount() {
    this.refComments = base.syncState(
      this.props.path + "/" + this.props.id + "/replies",
      {
        context: this,

        state: "comments",
      }
    );

    var starCountRef = databased.ref(
      this.props.path + "/" + this.props.id + "/replies"
    );
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ counter: a });
      // console.log(a);
    });
  }

  postNewComment(comment) {
    const timePublished = Date.now();
    if (false) {
      alert("Unable to Post Comment. Try Again!!!");
    } else {
      comment.user = {
        uid: this.props.currentUser.uid,
        name: this.props.currentUser.displayName,
        time: timePublished,
        photo: this.props.currentUser.photoURL,
      };
      const comments = {
        ...this.state.comments,
      };

      const timestamp = Date.now();
      comments[`reply-${timestamp}`] = comment;

      databased
        .ref(this.props.path + "/" + this.props.id + "/replies")
        .set(comments);

      // this.setState({
      //   comments: comments,

      // });
    }
  }
  auth(provider) {
    auth.signInWithPopup(providers[provider]);
  }
  logout() {
    this.setState({ isLoggedIn: false, user: {} });
              localStorage.removeItem('userid')
  }
  expandArea() {
    alert("poda");
    this.setState({
      areaExpanded: true,
    });
  }
  hideArea() {
    this.setState({
      areaExpanded: false,
    });
  }
  render() {
    return (
      <div>
        <p style={{ fontSize: "0.6rem" }}>
          <a
            data-toggle="collapse"
            href={"#collapseExample" + this.props.id}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {this.state.counter === 0 ? (
              this.props.currentUser.uid ? (
                "Post a Reply"
              ) : (
                <span className="text-muted ">[Login to Like or Reply]</span>
              )
            ) : (
              <p>
                {this.state.counter}{" "}
                {this.state.counter === 1 ? " Reply" : " Replies"}
              </p>
            )}
          </a>
        </p>
        <div className="collapse" id={"collapseExample" + this.props.id}>
          <div>
           
            {/* {!this.props.currentUser.uid &&("Please login to post a reply")} */}

            {/* {JSON.stringify(this.state.comments)} */}
            <AllReplyComments
              comments={this.state.comments}
              slug={this.props.path + "/" + this.props.id + "/replies"}
              user={this.props.currentUser.uid}
              name={this.props.currentUser.displayName}
            />
             {this.props.currentUser.uid && (
              <NewComment postNewComment={this.postNewComment} />
            )}

            {this.state.counter === 0 && (
              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
