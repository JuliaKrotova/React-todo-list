import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../TodoList/TodoActions";
import { todosStateSet } from "../TodoList/TodoActions";

const TodoItem = ({
  item,
  todosState,
  todosStateSet,
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
            if (todosState === "edit") {
              todosStateSet("editTask");
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
            (todosState === "edit" || todosState === "editTask"
              ? " hidden"
              : "")
          }
        ></span>
      </label>
      <button
        className={
          "todo__action" +
          (todosState === "edit" || todosState === "editTask" ? " show" : "")
        }
        onClick={() => {
          removeTodo(item.id);
          todosStateSet("edit");
        }}
      ></button>
    </li>
  );
};

const mapStateToProps = ({ todoList }) => ({ ...todoList });

const mapDispatchToProps = {
  removeTodo,
  todosStateSet,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
