import {PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE} from './queue.types';

const INITIAL_STATE = {
    count: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYIT:
           console.log(action.payload)
           return {
             ...state, 
             nowPlaying:action.payload,
             audio: action.payload.audio,
             cover: action.payload.cover,
             title: action.payload.title,
             vendor: action.payload.vendor,
             slug: action.payload.slug

             
           };
        
         default: return state;
    }
};
export default reducer;