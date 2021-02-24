import { PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE } from "./queue.types"
import * as SETTINGS from "../../pages/constants/Settings"
import ReactGA from 'react-ga'


ReactGA.initialize('UA-168458070-1')
let queue = [
  {
    audio: SETTINGS.liveURL,
    cover: SETTINGS.liveCover,
    title: "Live Radio",
    vendor: "audio",
    slug: "/live",
  },
]
const INITIAL_STATE = {
  count: 1,
  myQueue: queue,
}

const pointer = 0

const reducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case PLAYIT:
      return {
        ...state,
        nowPlaying: action.payload,
      }
    case NEXT:
      return {
        ...state,
        nextSong: action.payload,
      }
    case PREVIOUS:
      return {
        ...state,
        previousSong: action.payload,
      }
    case QUEUE:
      if (action.payload.type === "remove") {
        let index = queue.findIndex(function (o) {
          return o.slug === action.payload.data.slug
        })
        if (index !== -1) queue.splice(index, 1)
        // console.log(index)
      } else {
        let isAdded = queue.find((o) => o.slug == action.payload.slug)
        if (isAdded === undefined) {
          queue.push(action.payload)
          ReactGA.event({
            category: 'Queue',
            action: action.payload.title,
            label: 'Queue Added',
            nonInteraction: true,})
      
        } else {
          // alert('Already added')
        }
      }

      return {
        ...state,
        myQueue: { tracks: queue, count: state.count + 1 },
      }

    default:
      return state
  }
}
export default reducer
