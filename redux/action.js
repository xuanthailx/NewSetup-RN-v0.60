import {ADD_TODO} from './actionTypes';

let nextTodoId = 0;

const addTodo = payload => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    payload,
  },
});

export {addTodo};
