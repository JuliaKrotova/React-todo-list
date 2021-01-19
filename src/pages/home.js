import React from "react";
import TodoList from "../features/TodoList/todoList";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <TodoList />
        </div>
      </main>
    </>
  );
};

export default Home;
