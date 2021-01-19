import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../TodoList/TodoActions";
import { todosStateSet } from "../TodoList/TodoActions";

const ModalAdd = ({ todosState, todosStateSet, addTodo }) => {
  const [newTask, setNewTask] = useState("");

  const addTodoAndClose = (event) => {
    event.preventDefault();
    addTodo(newTask);
    closeModalAdd();
  };

  const closeModalAdd = () => {
    todosStateSet("show");
    setNewTask("");
  };

  return (
    <section
      className={"modal modal--add" + (todosState === "addTask" ? " show" : "")}
    >
      <h2 className="visually-hidden">Форма добавления задачи</h2>
      <div className="container modal__wrapper">
        <div className="form">
          <form method="post" name="taskAdd" onSubmit={addTodoAndClose}>
            <div className="form__row">
              <textarea
                onChange={(event) => {
                  setNewTask(event.target.value);
                }}
                value={newTask}
                name="taskArea"
                placeholder="Введите текст задачи"
                required
              ></textarea>
            </div>
            <div className="form__row form__row--buttons">
              <button
                type="button"
                className="button form__button form__button--close"
                onClick={closeModalAdd}
              >
                Закрыть
              </button>
              <button
                className="button button--current form__button form__button--add"
                type="submit"
              >
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ todoList }) => ({ ...todoList });

const mapDispatchToProps = {
  addTodo,
  todosStateSet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd);
