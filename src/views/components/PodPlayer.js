import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import { Media, Player, controls, } from 'react-media-player'
const { PlayPause, MuteUnmute,Volume,SeekBar, } = controls
// const { formatTime } = utils



class PodPlayer extends Component {

  constructor(props){
    super(props)
    this.state={
  
      percentage:60
      
    }
     
  };
    shouldComponentUpdate({ media }) {
        return this.props.media.currentTime !== media.currentTime
      }
  render() {
    const { className, style, media } = this.props

  let duration = media.duration
  let currentTime = media.currentTime
  let percentage = (currentTime/duration)*100






   

    if (media.isLoading) {
        return (
          <>

          <div class="row Podplayer">
          <div class="col s12 m2">
            <div width="100%" height="">
            <img src={this.props.art} width="100%" className="nbm-poster z-depth-3" alt={this.props.alt}></img>
            </div>
              
               
          </div>
          
          <div class="col s12 m9">
                <div className="left-align asd">
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
                    <h4>{this.props.podtitle}</h4>
                    <p class="podpara">{this.props.writeup}</p>
                     {/* <p>Duration :<b>{media.duration}</b> </p>
                     <time>
                       Current Time : {(media.currentTime)}
                      </time>
                      <SeekBar /> */}
                      
                </div>
           </div>
          </div>
          
          
           
    
    
           
          
         </>
        )
      }
     return (
    <>

      <div class="row Podplayer">
      <div class="col s12 m3">
        <div min-width="100%" height="">
        <img src={this.props.art} width="100%" className="nbm-poster z-depth-3" alt={this.props.alt}></img>
        </div>
          
           
      </div>
      
        <div class="col s12 m8">
            <div className="left-align  asd">
                <h4>{this.props.podtitle}</h4>
                  <p class="podpara">{this.props.writeup}</p>
                 {/* <p>Duration :<b>{media.duration}</b> </p>
                 <time>
                   Current Time : {media.duration}
                  </time>
                  <SeekBar /> */}
                  
                   
            </div>
       </div>
      </div>
      
      
       


       
      
     </>



     
    )
  }
}
 
export default withMediaProps(PodPlayer)