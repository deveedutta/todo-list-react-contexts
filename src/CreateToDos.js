import React, { useContext, useEffect } from "react";
import { TodoContext } from "./TodoStateManager";

const CreateToDos = (props) => {
  const { createNewTodo } = useContext(TodoContext);
  useEffect(() => {
    console.log();
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      createNewTodo(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <>
      <h2>Add some text and press enter</h2>
      <input
        type="text"
        placeholder="Enter a new todo item"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default CreateToDos;
