import { createContext, useState } from "react";

import { toDos } from "./store";

export const TodoContext = createContext(toDos);
export const TodoContextProvider = TodoContext.Provider;
export const TodoContextConsumer = TodoContext.Consumer;

export default function TodoStateManager(props) {
  const [initialToDos, setToDos] = useState(toDos);

  const moveArrayElement = (arr, fromIndex, toIndex) => {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  };

  const updateToDos = (item, index) => {
    item.completed = !item.completed;
    let newState = [...initialToDos];
    newState[index] = item;

    if (item.completed === true) {
      newState = moveArrayElement(newState, index, initialToDos.length - 1);
    }

    setToDos([...newState]);
  };

  const createNewTodo = (title) => {
    const newTodoItem = {
      title,
      userId: 1,
      id: "x",
      removed: false,
      completed: false,
    };
    // initialToDos.unshift(newTodoItem);
    const newState = [newTodoItem, ...initialToDos];
    setToDos(newState);
  };

  const removeToDoItem = (index) => {
    const newState = [...initialToDos];
    newState.splice(index, 1);
    setToDos(newState);
  };
  return (
    <>
      <TodoContextProvider
        value={{
          toDos: initialToDos,
          updateToDos,
          createNewTodo,
          removeToDoItem,
        }}
      >
        {props.children}
      </TodoContextProvider>
    </>
  );
}
