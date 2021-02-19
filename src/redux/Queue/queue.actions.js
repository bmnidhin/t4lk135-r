import {PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE} from './queue.types';

let nextToPlay = 0;

//playit()
export const playIt = (content) => {
  
    return {
        type: PLAYIT,
        payload: {
            id: ++nextToPlay,
            audio: content.audio,
            cover: content.cover,
            title: content.title,
            vendor: content.vendor,
            slug: content.slug,
          }
    };
};
//currentlyPlaying()

//previousSong()

//nextSong()

//getFullQueue()
// export const increaseCounter = (content) => {
  
//     return {
//         type: INCREMENT,
//         payload: {
//             id: ++nextTodoId,
//             content
//           }
//     };
// };
// export const decreaseCounter = () => {
//     return {
//        type: DECREMENT,
//     };
// };