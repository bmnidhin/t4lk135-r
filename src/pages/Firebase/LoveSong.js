import React, { Component } from "react";
import { databased } from "../../utils/FirebaseSettings";

export class LoveSong extends Component {
  constructor(props) {
    super(props);
    this.changeLikes = this.changeLikes.bind(this);
    this.state = {
      counter: 0,
      snapshot:{}
    };
  }
  componentDidMount(){
    let starcount = databased.ref( this.props.slug + "-likes"+"/song-likes/"+
    this.props.songId +"/" 
    // +this.props.userid 
    );
    starcount.on('value', (snapshot) => {
        let count = snapshot.val()
        this.setState({
         snapshot : count
       });
    
        
    //   updateStarCount(postElement, snapshot.val());
    });
    starcount.on("value", (snapshot) => {
        let a = snapshot.numChildren();
        this.setState({ counter: a });
        // console.log(a);
      });
  }
  changeLikes() {
    this.setState({
      count: 12387,
    });
  }
  render() {
    return (
      <>
        <span className="d-none">
          {this.state.count} {this.props.userid} {this.props.username}{" "}
          {this.props.slug} id {this.props.songId}
        </span>
        {!this.props.userid &&(
            <span class="material-icons" onClick={this.props.google} width="100%" style={{ fontSize: "1.5rem" }}>
            favorite_border
          </span>
            )}
        {this.props.userid &&(
            this.state.snapshot && this.state.snapshot[this.props.userid]!=undefined ? 
            <span class="material-icons"width="100%" style={{ fontSize: "1.5rem" }}
            onClick={() => {
                databased
                  .ref(
                    this.props.slug + "-likes"+
                      "/song-likes/" +
                      this.props.songId +
                      "/" +
                      this.props.userid
                  )
                  .remove();
              }}
            >
            favorite
          </span>
            :
            <span class="material-icons"width="100%" style={{ fontSize: "1.5rem" }}
            onClick={() => {
                databased
                  .ref(
                    this.props.slug + "-likes"+
                      "/song-likes/" +
                      this.props.songId +
                      "/" +
                      this.props.userid
                  )
                  .set({
                    liked: true,
                    name: this.props.username,
                    UID: this.props.userid,
                  });
              }}
            >
            favorite_border
          </span>
         
        )}
        {/* counterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
        <br/><span style={{ fontSize: "0.6rem" }}>{this.state.counter}</span>


        {/* {this.state.snapshot&&(this.state.snapshot[this.props.userid]!=undefined ?
            <span class="material-icons"width="100%"
            onClick={() => {
                databased
                  .ref(
                    this.props.slug + "-likes"+
                      "/song-likes/" +
                      this.props.songId +
                      "/" +
                      this.props.userid
                  )
                  .remove();
              }}
            >
            favorite
          </span>
            :
            <span class="material-icons"width="100%"
            onClick={() => {
                databased
                  .ref(
                    this.props.slug + "-likes"+
                      "/song-likes/" +
                      this.props.songId +
                      "/" +
                      this.props.userid
                  )
                  .set({
                    liked: true,
                    name: this.props.username,
                    UID: this.props.userid,
                  });
              }}
            >
            favorite_border
          </span>
            )} */}
        
        {/* {JSON.stringify(this.state.snapshot[this.props.userid])} */}
      </>
    );
  }
}

export default LoveSong;
