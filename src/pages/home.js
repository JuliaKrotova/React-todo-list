import React, { useState } from "react";
import TodoList from "../features/TodoList/todoList";

const Home = (props) => {
  return (
    <>
      <main>
        <div className="container">
          <TodoList
            listState={props.listState}
            setListState={props.setListState}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
