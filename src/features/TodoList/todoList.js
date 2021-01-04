import React, { useState } from "react";
import TodoItem from "../TodoItem/todoItem";

const TodoList = () => {
  let tasksData = [
    "Пройти стажировку в Онли",
    "Побриться",
    "Купить молоко",
    "Не забыть забрать сына из садика",
    "Купить сыр",
  ];

  const [todo, setTodo] = useState(
    tasksData.map((task) => {
      return { value: task };
    })
  );

  const addTodo = (newTask) => {
    setTodo((prevState) => [...prevState, { value: newTask }]);
  };

  const removeTodo = (index) => {
    setTodo(todo.filter((item, i) => i !== index));
  };

  return (
    <section className="todo">
      <h2 className="visually-hidden">Задачи</h2>
      <p className="todo__empty hidden">Список задач пуст</p>
      <ul className="todo__list">
        {todo.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
      <button
        className="button todo__button--add"
        aria-label="Добавить задачу"
      ></button>

      <div>
        {todo.map((item, index) => (
          <div key={index} onClick={() => removeTodo(index)}>
            {item.title}
          </div>
        ))}
        <button onClick={() => addTodo("новая таска")}>Add</button>
      </div>
    </section>
  );
};

export default TodoList;
