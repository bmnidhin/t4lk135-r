import React, { Component } from 'react'
import axios from 'axios';


slug = this.props.slug

class Apk extends Component {



    state = {
        persons: []
      }
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });

          })
      }
 
  render() {
    
    return (
        
       <h2>person.address.street{ slug }</h2>
    //     <ul>
    //     { this.state.persons.map(person => <li></li>)}
    //   </ul>
      
        

     
    )
  }
}
 
export default Apk;