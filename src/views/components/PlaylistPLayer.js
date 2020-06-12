
import React, { Component } from 'react'
import { Media, Player, controls, } from 'react-media-player'
import CustomPlayPause from '../components/CustomPlayPause'
import { withMediaProps } from 'react-media-player'
import LoadingStatus from './LoadingStatus'



const streamURL = "https://node-19.zeno.fm/7dpu3aargzzuv?rj-ttl=5&rj-tok=AAABcniqxPcAfj_wZNkMunG3eA"

let campfireStory = ""
let bootingUp = ""
let three =""
let four =""
let five =""
let six = ""
let seven = ""
let eight = ""
let nine = ""
let ten = ""
let loading

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}



class PlaylistPlayer extends Component  {
  
  
  
  
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null,
    url:streamURL
  };

//   componentDidMount() {
//     this.player.addEventListener("timeupdate", e => {
//       this.setState({
//         currentTime: e.target.currentTime,
//         duration: e.target.duration
//       });
//     });
//   }

//   componentWillUnmount() {
//     this.player.removeEventListener("timeupdate", () => {});
//   }

  componentDidUpdate(prevProps, prevState) {
    
    campfireStory = this.props.one
    bootingUp = this.props.two
    three = this.props.three
    four = this.props.four
    five = this.props.five
    six = this.props.six
    seven = this.props.seven
    eight =this.props.eight
    nine = this.props.nine
    ten = this.props.ten

    const TRACKS = this.props.meta
    


    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case 1:
          track = campfireStory;
          break;
        case 2:
          track = bootingUp;
          break;
         
        case 3:
          track = three;
          break;
        case 4:
          track = four;
          break;
        case 5:
          track = five;
          break;
        case 6:
          track = six;
          break;
        case 7:
          track = seven;
          break;
        case 8:
          track = eight;
          break;
        case 9:
          track = nine;
          break;
        case 10:
            track = ten;
            break;
        default:
          track = streamURL;
          break;
      }
      if (track) {
        this.player.src = track;
        // this.player.play();
        // this.props.media.play()
        this.setState({ url: track });
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }

    // pause
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
    if (
      this.state.duration &&
      !isNaN(this.state.duration) &&
      this.state.duration === this.state.currentTime
    ) {
      const currentTrackIndex = TRACKS.findIndex(
        // track => track.title === this.state.selectedTrack
        track => track.id === this.state.selectedTrack
      );
      const tracksAmount = TRACKS.length - 1;
      if (currentTrackIndex === tracksAmount) {
        this.setState({
          selectedTrack: null,
          player: "stopped",
          currentTime: null,
          duration: null
        });
      } else {
        this.handleSkip("next");
      }
    }
  }

  // handleSkip = direction => {
  //   const currentTrackIndex = TRACKS.findIndex(
  //     track => track.title === this.state.selectedTrack
  //   );
  //   const tracksAmount = TRACKS.length - 1;
  //   if (direction === "previous") {
  //     const previousTrack =
  //       currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
  //     const trackToPlay = TRACKS[previousTrack];
  //     this.setState({ selectedTrack: trackToPlay.title });
  //   } else if (direction === "next") {
  //     const nextTrack =
  //       currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
  //     const trackToPlay = TRACKS[nextTrack];
  //     this.setState({ selectedTrack: trackToPlay.title, duration: null });
  //   }
  // };

  // setTime = time => {
  //   this.player.currentTime = time;
  // };

  render() {
   
    const TRACKS = this.props.meta
    
    const list = TRACKS.map(item => {
      return (
      
           <li  key={item.id}
          // onClick={() => this.setState({ selectedTrack: item.title })}
          onClick={() => this.setState({ selectedTrack: item.id })}
          style={{
            // fontWeight: item.title === this.state.selectedTrack && "bold"
            // fontWeight: item.id === this.state.selectedTrack && "bold"
            color: item.id === this.state.selectedTrack && "green",
            backgroundColor: item.id === this.state.selectedTrack && "#8a7d7d33",
            cursor: "pointer"
          }} className="collection-item"> 
           
           <div class="row">
        <div class="col s1 center-align">{item.id}</div>
      <div class="col s8 left-align">{item.title}</div>
      <div class="col s3 right-align">23 Min</div>
      
    </div>






          
          
          </li>
        
        // <li
        //   key={item.id}
        //   // onClick={() => this.setState({ selectedTrack: item.title })}
        //   onClick={() => this.setState({ selectedTrack: item.id })}
        //   style={{
        //     // fontWeight: item.title === this.state.selectedTrack && "bold"
        //     // fontWeight: item.id === this.state.selectedTrack && "bold"
        //     color: item.id === this.state.selectedTrack && "green"
        //   }}
        // >
        //   {item.title}
        // </li>
      );
    });

    

    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);
    // const { className, style, media } = this.props

   

    return (
      <>
     
        
        
     {/* <LoadingStatus/> */}
        
        <div className="player">
           
          <ul className="tracklist collection ">{list}</ul>
    
          {/* <TimeBar
            setTime={this.setTime}
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          
          {/* {this.state.player !== "stopped" && (
            <div className="buttons">
              <button onClick={() => this.handleSkip("previous")}>
                Previous
              </button>
              {this.state.player === "paused" && (
                <button onClick={() => this.setState({ player: "playing" })}>
                  Play
                </button>
              )}
              {this.state.player === "playing" && (
                <button onClick={() => this.setState({ player: "paused" })}>
                  Pause
                </button>
              )}
              <button onClick={() => this.setState({ player: "stopped" })}>
                Stop
              </button>
              <button onClick={() => this.handleSkip("next")}>Skip</button>
            </div>
          )} */}
         </div>
         <div>
        <audio ref={ref => (this.player = ref)} />
        
           
        
        
       
          <Player src ={this.state.url} autoPlay="true" vendor="audio"/>

         
        
        
        
        </div>


         <div>
         
           
           <div className="media-controls">
               <CustomPlayPause />
 
               </div>
          
         </div>




      </>
    );
  }
}

// function TimeBar({ currentTime, duration, setTime }) {
//   const formattedCurrentTime = getTime(currentTime);
//   const formattedDuration = getTime(duration);
//   const sBits = [];
//   let count = 0;
//   while (count < duration) {
//     sBits.push(count);
//     count++;
//   }
//   const seconds = sBits.map(second => {
//     return (
//       <div
//         key={second}
//         onClick={() => setTime(second)}
//         style={{
//           float: "left",
//           cursor: "pointer",
//           height: "30px",
//           width: `${300 / Math.round(duration)}px`,
//           background:
//             currentTime && Math.round(currentTime) === second
//               ? "white"
//               : "black",
//           transition: "all 0.5s ease-in-out"
//         }}
//       />
//     );
//   });
//   return (
//     <div className="timebar">
//       <div className="bar">{seconds}</div>
//       {currentTime ? (
//         <div className="time">
//           {formattedCurrentTime} / {formattedDuration}
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

export default PlaylistPlayer;