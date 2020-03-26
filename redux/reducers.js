import {combineReducers} from 'redux';
import {ADD_TODO} from './actionTypes';

const INITIALSTATE = {
  count: 0,
};

const countReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;
