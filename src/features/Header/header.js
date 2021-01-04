import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <h1 className="header__h1">Сегодня</h1>
        <button className="button header__button-edit">Править</button>
        <button className="button header__button-cancel">Отменить</button>
      </div>
    </header>
  );
};

export default Header;
