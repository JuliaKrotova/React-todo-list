import React, { useState } from "react";

const ModalAdd = (props) => {
  const [newTask, setNewTask] = useState("");

  const addTodoAndClose = (event) => {
    event.preventDefault();
    props.addTodo(newTask);
    closeModalAdd();
  };

  const closeModalAdd = () => {
    props.setListState("show");
    setNewTask("");
  };

  return (
    <section
      className={
        "modal modal--add" + (props.listState === "add" ? " show" : "")
      }
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

export default ModalAdd;
