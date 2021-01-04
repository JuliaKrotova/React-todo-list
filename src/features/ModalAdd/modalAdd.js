import React, { useState } from "react";

const ModalAdd = () => {
  return (
    <section className="modal modal--add">
      <h2 className="visually-hidden">Форма добавления задачи</h2>
      <p className="todo__empty hidden">Список задач пуст</p>
      <div className="container modal__wrapper">
        <div className="form">
          <form method="post" name="taskAdd">
            <div className="form__row">
              <textarea
                name="taskArea"
                placeholder="Введите текст задачи"
                required
              ></textarea>
            </div>
            <div className="form__row form__row--buttons">
              <button className="button form__button form__button--close">
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
