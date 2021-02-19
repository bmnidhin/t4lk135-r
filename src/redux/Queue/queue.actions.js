import {PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE} from './queue.types';

let nextToPlay = 0;

//playit()

//currentlyPlaying()

//previousSong()

//nextSong()

//getFullQueue()
export const increaseCounter = (content) => {
  
    return {
        type: INCREMENT,
        payload: {
            id: ++nextTodoId,
            content
          }
    };
};
export const decreaseCounter = () => {
    return {
       type: DECREMENT,
    };
};