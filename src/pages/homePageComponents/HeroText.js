import React, { Component } from 'react'
import axios from'axios'
import { calcTimeDelta } from 'react-countdown';

export default class HeroText extends Component {

    constructor(props) {
        super(props);
        this.state={
            herotextEng:"",
            
        }
    
        this.textStyle={
            color:"white",
            paddingLeft:"20px" ,
            paddingRight:"20px"    
        }
    
    }
   
    componentDidMount() {
        axios
          .get("https://api.thetkmshow.in/settings")
          .then((response) => {
            this.setState({
               herotextEng: response.data.map((event) => event.HerotextEng)
               ,});})
          .catch((error) => {
            console.log(error);
          });
      }
    render() {
        return (
            <div>
                <h1 style={this.textStyle} className="Herotext">{this.state.herotextEng}</h1>
                
            </div>
        )
    }
}
