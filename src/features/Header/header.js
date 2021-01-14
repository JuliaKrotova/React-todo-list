import React from "react";

const Header = (listState, setListState) => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <h1 className="header__h1">Сегодня</h1>
        <button
          className={
            "button header__button-edit" +
            (listState === "edit" ? " hidden" : "")
          }
          onClick={() => setListState("edit")}
        >
          Править
        </button>
        <button
          className={
            "button header__button-cancel" +
            (listState === "edit" ? " show" : "")
          }
          onClick={() => setListState("show")}
        >
          Отменить
        </button>
      </div>
    </header>
  );
};

export default Header;
