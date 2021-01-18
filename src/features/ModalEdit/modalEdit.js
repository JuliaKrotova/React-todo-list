import React from "react";
import { connect } from "react-redux";
import { editTodo } from "../TodoList/TodoActions";

const ModalEdit = ({
  listState,
  setListState,
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
    setListState("edit");
    setEditedTask("");
  };

  return (
    <section
      className={
        "modal modal--edit" + (listState === "editTask" ? " show" : "")
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

const mapStateToProps = ({ todos }) => ({ ...todos });

const mapDispatchToProps = {
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
