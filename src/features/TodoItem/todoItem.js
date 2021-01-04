import React, { useState } from "react";

const TodoItem = (props) => {
  return (
    <li className="todo__item">
      <label className="todo__label">
        <span className="todo__span">{props.item.value}</span>
        <input type="checkbox" className="visually-hidden todo__check-input" />
        <span className="todo__checkbox"></span>
      </label>
      <button className="todo__action"></button>
    </li>
  );
};

export default TodoItem;
