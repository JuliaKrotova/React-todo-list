import React, { useState } from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/todoItem";
import ModalAdd from "../ModalAdd/modalAdd";
import ModalEdit from "../ModalEdit/modalEdit";
import { addTodo, removeTodo, editTodo } from "../TodoList/TodoActions";

const mapStateToProps = ({ todos }) => ({ ...todos });

const mapDispatchToProps = {
  addTodo,
  editTodo,
  removeTodo,
};

const TodoList = ({
  todos,
  addTodo,
  removeTodo,
  editTodo,
  listState,
  setListState,
}) => {
  const [editedTask, setEditedTask] = useState("");

  const [editedId, setEditedId] = useState("");

  return (
    <section className="todo">
      <h2 className="visually-hidden">Задачи</h2>
      <p className={"todo__empty" + (todos.length === 0 ? " show" : "")}>
        Список задач пуст
      </p>
      <ul className="todo__list">
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            listState={listState}
            editedTask={editedTask}
            setEditedTask={setEditedTask}
            setEditedId={setEditedId}
            setListState={setListState}
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

      <ModalEdit
        listState={listState}
        setListState={setListState}
        editTodo={editTodo}
        editedTask={editedTask}
        editedId={editedId}
        setEditedTask={setEditedTask}
      />
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
