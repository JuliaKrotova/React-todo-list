import React from "react";
import TodoList from "../features/TodoList/todoList";

const Home = ({ listState, setListState }) => {
  return (
    <>
      <main>
        <div className="container">
          <TodoList listState={listState} setListState={setListState} />
        </div>
      </main>
    </>
  );
};

export default Home;
