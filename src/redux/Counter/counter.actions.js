import { INCREMENT, DECREMENT } from './counter.types';

let nextTodoId = 0;
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