import { TODO_ADD, TODO_REMOVE, TODO_EDIT, TODOS_STATE_SET } from "./types";

export const addTodo = (newTask) => ({
  type: TODO_ADD,
  payload: newTask,
});

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const editTodo = (id, editedTask) => ({
  type: TODO_EDIT,
  payload: {
    id,
    editedTask,
  },
});

export const todosStateSet = (state) => ({
  type: TODOS_STATE_SET,
  payload: state,
});
