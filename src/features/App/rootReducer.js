import { combineReducers } from "redux";
import { todoReducer } from "../TodoList/TodoReducer";

export const rootReducer = combineReducers({
  todoList: todoReducer,
});
