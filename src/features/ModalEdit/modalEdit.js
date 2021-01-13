import React from "react";

const ModalEdit = (props) => {
  function editAndClose(event) {
    event.preventDefault();
    props.editTodo();
    closeModalEdit();
  }

  const closeModalEdit = () => {
    props.setListState("edit");
    props.setEditedTask("");
  };

  return (
    <section
      className={
        "modal modal--edit" + (props.listState === "editTask" ? " show" : "")
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
                  props.setEditedTask(event.target.value);
                }}
                value={props.editedTask}
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

export default ModalEdit;
