import React, { useState } from "react";
import TodoList from "../features/TodoList/todoList";
import ModalAdd from "../features/ModalAdd/modalAdd";

const Home = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <main>
        <div className="container">
          <TodoList setModalState={setModalState} />
          <ModalAdd modalState={modalState} setModalState={setModalState} />
        </div>
      </main>
    </>
  );
};

export default Home;
