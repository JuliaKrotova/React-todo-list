import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo__item">
      <label className="todo__label">
        <span
          className="todo__span"
          onClick={() => {
            if (props.listState === "edit") {
              props.setListState("editTask");
              props.setEditedId(props.item.id);
              props.setEditedTask(props.item.title);
            }
          }}
        >
          {props.item.title}
        </span>
        <input type="checkbox" className="visually-hidden todo__check-input" />
        <span
          className={
            "todo__checkbox" +
            (props.listState === "edit" || props.listState === "editTask"
              ? " hidden"
              : "")
          }
        ></span>
      </label>
      <button
        className={
          "todo__action" +
          (props.listState === "edit" || props.listState === "editTask"
            ? " show"
            : "")
        }
        onClick={() => props.removeTodo(props.item.id)}
      ></button>
    </li>
  );
};

export default TodoItem;
