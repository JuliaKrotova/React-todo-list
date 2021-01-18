import React, { useState } from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/todoItem";
import ModalAdd from "../ModalAdd/modalAdd";
import ModalEdit from "../ModalEdit/modalEdit";

const TodoList = ({ todos, removeTodo, listState, setListState }) => {
  const [editedTask, setEditedTask] = useState("");

  const [editedId, setEditedId] = useState("");

  return (
    <section className="todo">
      <h2 className="visually-hidden">Задачи</h2>
      <p className={"todo__empty" + (todos.length === 0 ? " show" : "")}>
        Список задач пуст
      </p>
      <ul className="todo__list">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            listState={listState}
            setListState={setListState}
            setEditedTask={setEditedTask}
            setEditedId={setEditedId}
          />
        ))}
      </ul>
      <button
        onClick={() => setListState("add")}
        className="button todo__button--add"
        aria-label="Добавить задачу"
      ></button>

      <ModalAdd listState={listState} setListState={setListState} />

      <ModalEdit
        listState={listState}
        setListState={setListState}
        editedTask={editedTask}
        editedId={editedId}
        setEditedTask={setEditedTask}
      />
    </section>
  );
};

const mapStateToProps = ({ todos }) => ({ ...todos });

export default connect(mapStateToProps)(TodoList);
