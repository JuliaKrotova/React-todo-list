import React from "react";
import { connect } from "react-redux";
import { editTodo } from "../TodoList/TodoActions";
import { todosStateSet } from "../TodoList/TodoActions";

const ModalEdit = ({
  todosState,
  todosStateSet,
  editedTask,
  editedId,
  setEditedTask,
  editTodo,
}) => {
  function editAndClose(event) {
    event.preventDefault();
    editTodo(editedId, editedTask);
    closeModalEdit();
  }

  const closeModalEdit = () => {
    todosStateSet("edit");
    setEditedTask("");
  };

  return (
    <section
      className={
        "modal modal--edit" + (todosState === "editTask" ? " show" : "")
      }
    >
      <h2 className="visually-hidden">Форма редактирования задачи</h2>
      <div className="container modal__wrapper">
        <div className="form">
          <form method="post" name="taskAdd" onSubmit={editAndClose}>
            <div className="form__row">
              <input
                type="text"
                name="taskInput"
                onChange={(event) => {
                  setEditedTask(event.target.value);
                }}
                value={editedTask}
                required
              ></input>
            </div>
            <div className="form__row form__row--buttons">
              <button
                type="button"
                className="button form__button form__button--close"
                onClick={closeModalEdit}
              >
                Закрыть
              </button>
              <button
                className="button button--current form__button form__button--edit"
                type="submit"
              >
                Сохранить
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
  editTodo,
  todosStateSet,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
