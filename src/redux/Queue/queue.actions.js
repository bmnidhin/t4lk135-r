import {PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE} from './queue.types';

let nextToPlay = 0;

//playit() //cureentlypalaying
export const playIt = (content) => {
  
    return {
        type: PLAYIT,
        payload: {
          
            audio: content.audio,
            cover: content.cover,
            title: content.title,
            vendor: content.vendor,
            slug: content.slug,
          }
    };
};


//previousSong()
export const previousSong = (content) => {
    
    return {
        type: PREVIOUS,
        payload: {
           
            audio: content.audio,
            cover: content.cover,
            title: content.title,
            vendor: content.vendor,
            slug: content.slug,
          }
    };
};
//nextSong()
export const nextSong = (content) => {
    
    return {
        type: NEXT,
        payload: {
           
            audio: content.audio,
            cover: content.cover,
            title: content.title,
            vendor: content.vendor,
            slug: content.slug,
          }
    };
};
//getFullQueue()
export const addQueue = (content) => {
  
    return {
        type: QUEUE,
        payload: {
            id:  nextToPlay++,
            audio: content.audio,
            cover: content.cover,
            title: content.title,
            vendor: content.vendor,
            slug: content.slug,
          }
    };
};
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