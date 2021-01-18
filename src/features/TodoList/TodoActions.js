import { TODO_ADD, TODO_REMOVE, TODO_EDIT } from "./types";

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
