import { TODO_ADD, TODO_REMOVE, TODO_EDIT, TODOS_STATE_SET } from "./types";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Пройти стажировку в Онли",
    },
    {
      id: 2,
      title: "Побриться",
    },
    {
      id: 3,
      title: "Купить молоко",
    },
    {
      id: 4,
      title: "Не забыть забрать сына из садика",
    },
    {
      id: 5,
      title: "Купить сыр",
    },
  ],
  todosState: "show",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload,
          },
        ],
      };
    case TODO_REMOVE:
      return {
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    case TODO_EDIT:
      const todoIndex = state.todos.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.todos[todoIndex].title = action.payload.editedTask;

      return {
        todos: [...state.todos],
      };
    case TODOS_STATE_SET:
      return {
        ...state,
        todosState: action.payload,
      };
    default:
      return state;
  }
};
