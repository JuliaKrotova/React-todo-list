import React, { useState } from "react";
import TodoItem from "../TodoItem/todoItem";
import ModalAdd from "../ModalAdd/modalAdd";
import ModalEdit from "../ModalEdit/modalEdit";

const TodoList = (props) => {
  const listState = props.listState;
  const setListState = props.setListState;

  let tasksData = [
    "Пройти стажировку в Онли",
    "Побриться",
    "Купить молоко",
    "Не забыть забрать сына из садика",
    "Купить сыр",
  ];

  const [editedTask, setEditedTask] = useState("");

  const [editedIndex, setEditedIndex] = useState("");

  const [todo, setTodo] = useState(
    tasksData.map((task) => {
      return { value: task };
    })
  );

  const addTodo = (newTask) => {
    setTodo((prevState) => [...prevState, { value: newTask }]);
  };

  const editTodo = () => {
    setTodo((prevState) => {
      prevState[editedIndex].value = editedTask;
      return prevState;
    });
  };

  const removeTodo = (itemToRemove) => {
    setTodo(todo.filter((item) => item !== itemToRemove));
  };

  return (
    <section className="todo">
      <h2 className="visually-hidden">Задачи</h2>
      <p className={"todo__empty" + (todo.length === 0 ? " show" : "")}>
        Список задач пуст
      </p>
      <ul className="todo__list">
        {todo.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            listState={listState}
            setListState={setListState}
            removeTodo={removeTodo}
            setEditedIndex={setEditedIndex}
            setEditedTask={setEditedTask}
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

      <ModalEdit
        listState={listState}
        setListState={setListState}
        editTodo={editTodo}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
      />
    </section>
  );
};

export default TodoList;
