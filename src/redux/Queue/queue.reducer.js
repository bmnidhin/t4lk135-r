import {PLAYIT, CURRENTLYPLAYING, PREVIOUS, NEXT, QUEUE} from './queue.types';


let queue =[
  { audio: "",
    cover: "",
    title: "Live Audio",
    vendor: 'audio',
    slug: "roast-roasting-roasted"
  }
]
const INITIAL_STATE = {
    count: 1,
    myQueue : queue
   
};

// const pointer =0;


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYIT:
           
           return {
             ...state, 
             nowPlaying:action.payload, 
           };
           case NEXT:
           
           return {
             ...state, 
             nextSong:action.payload,  
           };
           case PREVIOUS:
           
            return {
              ...state, 
              previousSong:action.payload,  
            };
           case QUEUE:
           let isAdded =  queue.find(o => o.slug == action.payload.slug);
          if(isAdded === undefined){
           queue.push(action.payload)
          }
          else{
            alert('Already added')
          }
           return {
             ...state, 
             myQueue:{tracks:queue,count:state.count+1},
           
             
           };
        
         default: return state;
    }
};
export default reducer;