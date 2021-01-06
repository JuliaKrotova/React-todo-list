import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <h1 className="header__h1">Сегодня</h1>
        <button
          className={
            "button header__button-edit" +
            (props.listState == "edit" ? " hidden" : "")
          }
          onClick={() => props.setListState("edit")}
        >
          Править
        </button>
        <button
          className={
            "button header__button-cancel" +
            (props.listState == "edit" ? " show" : "")
          }
          onClick={() => props.setListState("show")}
        >
          Отменить
        </button>
      </div>
    </header>
  );
};

export default Header;
