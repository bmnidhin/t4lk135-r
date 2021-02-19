import {PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE} from './queue.types';

const INITIAL_STATE = {
    count: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
           console.log(action.payload)
           return {
             ...state, 
             count: state.count + 1,
             
           };
        case DECREMENT:
           return {
              ...state, count: state.count - 1,
           };
         default: return state;
    }
};
export default reducer;