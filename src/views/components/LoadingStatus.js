import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import { Media, Player, controls, } from 'react-media-player'
const { PlayPause, MuteUnmute,Volume,SeekBar, } = controls
// const { formatTime } = utils



class LoadingStatus extends Component {

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
         
          
          <div class="col s12 m8">
                <div className="left-align asd">
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
                    
                      
                </div>
           </div>
          </div>
          
          
           
    
    
           
          
         </>
        )
      }
     return (
    <>

      <h5>Loaded</h5>
       


       
      
     </>



     
    )
  }
}
 
export default withMediaProps(LoadingStatus)