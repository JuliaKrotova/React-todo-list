import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../TodoList/TodoActions";

const TodoItem = ({
  item,
  listState,
  setListState,
  setEditedTask,
  setEditedId,
  removeTodo,
}) => {
  return (
    <li className="todo__item">
      <label className="todo__label">
        <span
          className="todo__span"
          onClick={() => {
            if (listState === "edit") {
              setListState("editTask");
              setEditedId(item.id);
              setEditedTask(item.title);
            }
          }}
        >
          {item.title}
        </span>
        <input type="checkbox" className="visually-hidden todo__check-input" />
        <span
          className={
            "todo__checkbox" +
            (listState === "edit" || listState === "editTask" ? " hidden" : "")
          }
        ></span>
      </label>
      <button
        className={
          "todo__action" +
          (listState === "edit" || listState === "editTask" ? " show" : "")
        }
        onClick={() => removeTodo(item.id)}
      ></button>
    </li>
  );
};

const mapStateToProps = ({ todos }) => ({ ...todos });

const mapDispatchToProps = {
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
