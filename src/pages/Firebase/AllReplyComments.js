import React, { Component } from "react";
// import Comment from "./Comment";
import { databased } from "../../utils/FirebaseSettings";
import OneReplyComment from "./OneReplyComment";
class AllReplyComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: "Loading",
    };
  }

  componentDidMount() {
    var starCountRef = databased.ref("comments/" +this.props.slug);
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ counter: a });
      // console.log(a);
    });
  }

  renderComment(key, comment, slug, id, user, name) {
    return (
      <OneReplyComment
        key={key}
        comment={comment}
        slug={slug}
        id={key}
        user={user || ""}
        name={name}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.state.counter !== 0 && (
            <div className="" style={{ fontSize: "0.9rem" }}>
              <hr style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }} />
            </div>
          )}

          {Object.keys(this.props.comments)
           
            .map((key) =>
              this.renderComment(
                key,
                this.props.comments[key],
                this.props.slug,
                Object.keys(this.props.comments[key]),
                this.props.user,
                this.props.name
              )
            )}
        </div>
      </div>
    );
  }
}

export default AllReplyComments;
