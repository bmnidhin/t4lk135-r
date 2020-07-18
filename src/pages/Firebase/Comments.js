import React, { Component } from "react";


import Comment from "./Comment";
import base, { auth, providers, databased } from '../../utils/FirebaseSettings'
class Comments extends Component {

  constructor(props) {
    super(props);
   

    this.state = {
        counter : "loading",
    };
    
    
    
    
}
 
  componentDidMount() {

    var starCountRef = databased.ref(this.props.slug);
        starCountRef.on('value', (snapshot)=> {
        let a = snapshot.numChildren();
        this.setState({counter : a})
        console.log(a)
      
});
}
 
  renderComment(key, comment, slug, id, user, name, login) {

    return <Comment key={key} comment={comment} slug={slug} id={key} user={user || ''} name ={name}/>;
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
        {this.state.counter===0 &&(
          <div className='p-3 text-center'>
            <h5>Be First to Post a Comment</h5>
          </div>
        )}
         {this.state.counter!==0 &&(
          <div className=''style={{fontSize:"0.9rem"}}>
            <p className="text-muted">{this.state.counter} Comments</p>
                 
                 <hr
                   style={{ borderTop: "3px solid rgba(115, 110, 110, 0.1)" }}
                 />
          </div>
        )}
        
        {Object.keys(this.props.comments).reverse().map(key =>
          this.renderComment(key, this.props.comments[key], this.props.slug, Object.keys(this.props.comments[key]),this.props.user , this.props.name, this.props.login)
        )}
        {/* {JSON.stringify(Object.keys(this.props.comments))} */}
      </div>
      
    </div>
    );
  }
}

export default Comments;