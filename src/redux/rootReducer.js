import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';

// here, combineReducers() as the name suggests combines 
// various reducers into a single reducer. In redux, 
// we can create as many reducers as we want. It is ideal to 
// create a new reducer for every operation that doesn't
//  depend on any other action. Since the createStore() 
//  in store.js can take only one reducer, hence combineReducer() 
//  is used to convert multiple reducers into one.

const rootReducer = combineReducers({
    counter: counterReducer,
});
export default rootReducer;