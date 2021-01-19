import React from "react";
import { connect } from "react-redux";
import { todosStateSet } from "../TodoList/TodoActions";

const Header = ({ todosState, todosStateSet }) => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <h1 className="header__h1">Сегодня</h1>
        <button
          className={
            "button header__button-edit" +
            (todosState === "edit" ? " hidden" : "")
          }
          onClick={() => todosStateSet("edit")}
        >
          Править
        </button>
        <button
          className={
            "button header__button-cancel" +
            (todosState === "edit" ? " show" : "")
          }
          onClick={() => todosStateSet("show")}
        >
          Отменить
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = ({ todoList }) => ({ ...todoList });

const mapDispatchToProps = {
  todosStateSet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
