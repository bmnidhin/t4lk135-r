import React, { Component } from "react";
import base, { auth, providers, databased } from '../../utils/FirebaseSettings'



class CommentLikes extends Component {

    constructor(props) {
        super(props);
       
    
        this.state = {
            counter : "",
        };
        
        
        
        
  }
  componentDidMount() {
  
        base.fetch(this.props.slug, {
          context: this,
          asArray: true
        }).then(data => {
          console.log(data);
        }).catch(error => {
          //handle error
        })
    
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

comments : {this.state.counter}


{this.props.likes=== undefined?
       
       this.props.user===''?"Login to like":
       <p onClick={()=>{databased.ref(this.props.slug +"/" + this.props.id  +"/" + 'likes'+"/" + this.props.user ).set({liked: true ,name: this.props.name,UID : this.props.user},)
    }}>Like</p>
       :
       (this.props.likes[this.props.user]) !==undefined ?
        
       <p onClick={()=>{databased.ref(this.props.slug +"/" + this.props.id  +"/" + 'likes'+"/" + this.props.user ).remove()
    }}>Dislike</p>
        
        :(this.props.user) ==='' ?
        
        'Please login to like'
        :
        <p onClick={()=>{databased.ref(this.props.slug +"/" + this.props.id  +"/" + 'likes'+"/" + this.props.user ).set({liked: true ,name: this.props.name,UID : this.props.user})
    }}>Like</p>
       
       }


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