import React, { Component } from "react";
import { databased } from "../../utils/FirebaseSettings";

class CommentLikes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    var starCountRef = databased.ref(
      "comments/" + this.props.slug + "/" + this.props.id + "/" + "likes"
    );
    starCountRef.on("value", (snapshot) => {
      let a = snapshot.numChildren();
      this.setState({ counter: a });
      // console.log(a);
    });

    //  let ref = databased.ref(this.props.slug +"/" + this.props.id  +"/" + 'likes');
    //   ref.once("value")
    //   .then((snapshot)=>{
    //     let a = snapshot.numChildren(); // 1 ("name")
    //     // let b = snapshot.child("name").numChildren(); // 2 ("first", "last")
    //     // let c = snapshot.child("name/first").numChildren(); // 0
    //     this.setState({counter : a})
    //     console.log(a) }
    //   );
  }

  render() {
    return (
      <div>
        <div>
          {/* {this.state.liked?"true":'false'} */}

          {/* {this.props.likes=== undefined? "likes undefined means no likes":
       
       "there is likes"
       
       } */}

          {/* Login {this.props.user} */}
          {/* (this.props.likes[this.props.user]) */}
          {/* Total Likes {Object.keys(this.props.likes).length} */}

          {this.props.likes === undefined ? (
            this.props.user === "" ? (
              <p>
                <span
                  className="material-icons pr-2"
                  style={{ fontSize: "0.6rem" }}
                >
                  thumb_up
                </span>{" "}
                {this.state.counter} [Login to like]{" "}
              </p>
            ) : (
              <p
                onClick={() => {
                  databased
                    .ref(
                      "comments/"+
                      this.props.slug +
                        "/" +
                        this.props.id +
                        "/" +
                        "likes" +
                        "/" +
                        this.props.user
                    )
                    .set({
                      liked: true,
                      name: this.props.name,
                      UID: this.props.user,
                    });
                }}
              >
                <span
                  className="material-icons pr-2"
                  style={{ fontSize: "0.6rem" }}
                >
                  thumb_up
                </span>{" "}
                {this.state.counter}
              </p>
            )
          ) : this.props.likes[this.props.user] !== undefined ? (
            <p
              onClick={() => {
                databased
                  .ref(
                    "comments/"+
                    this.props.slug +
                      "/" +
                      this.props.id +
                      "/" +
                      "likes" +
                      "/" +
                      this.props.user
                  )
                  .remove();
              }}
            >
              <span
                className="material-icons pr-2"
                style={{ color: "#c31c6c", fontSize: "0.6rem" }}
              >
                thumb_up
              </span>{" "}
              {this.state.counter}
            </p>
          ) : this.props.user === "" ? (
            <p>
              <span
                className="material-icons pr-2"
                style={{ fontSize: "0.6rem" }}
              >
                thumb_up
              </span>{" "}
              {this.state.counter} [Login to like]{" "}
            </p>
          ) : (
            <p>
              <span
                className="material-icons pr-2"
                style={{ fontSize: "0.6rem" }}
              >
                thumb_up
              </span>
              {this.state.counter}
            </p>
          )}

          {/* {this.props.likes=== undefined?
       
       ("No")
       :
       ((this.props.likes[this.props.user]||this.props.likes[this.props.user].name) === undefined?
        
        (<p onClick={()=>{databased.ref(this.props.slug +"/" + this.props.id  +"/" + 'likes'+"/" + this.props.user ).set({liked: true ,name: this.props.name,UID : this.props.user})
    }}>Like</p>)
        
        :"already liked"
        )
       
       } */}
          {/* name : {this.props.likes[this.props.user].name === (undefined || null)?'yes':'no'} */}
        </div>
      </div>
    );
  }
}

export default CommentLikes;
