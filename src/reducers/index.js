import { combineReducers } from 'redux';
import restaurants from './restaurants_reducer';

const rootReducer = combineReducers({
  restaurants,

});

export default rootReducer;
