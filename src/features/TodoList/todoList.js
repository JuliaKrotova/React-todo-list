import React, { useState } from "react";
import TodoItem from "../TodoItem/todoItem";
import ModalAdd from "../ModalAdd/modalAdd";

const TodoList = (props) => {
  let tasksData = [
    "Пройти стажировку в Онли",
    "Побриться",
    "Купить молоко",
    "Не забыть забрать сына из садика",
    "Купить сыр",
  ];

  const setListState = props.setListState;
  const listState = props.listState;

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
      <p className={"todo__empty" + (todo.length == "0" ? " show" : "")}>
        Список задач пуст
      </p>
      <ul className="todo__list">
        {todo.map((item, index) => (
          <TodoItem
            index={index}
            item={item}
            listState={listState}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <button
        onClick={() => setListState("add")}
        className="button todo__button--add"
        aria-label="Добавить задачу"
      ></button>

      <ModalAdd
        listState={listState}
        setListState={setListState}
        addTodo={addTodo}
      />
    </section>
  );
};

export default TodoList;
