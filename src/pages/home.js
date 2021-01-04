import React from "react";
import TodoList from "../features/TodoList/todoList";
import ModalAdd from "../features/ModalAdd/modalAdd";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <TodoList />
          <ModalAdd />
        </div>
      </main>
    </>
  );
};

export default Home;
