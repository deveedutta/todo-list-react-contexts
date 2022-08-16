import React, { useContext, Suspense } from "react";
import { TodoContext } from "./TodoStateManager";
const LazyListItem = React.lazy(() => import("./ListItem"));
import ListItem from "./ListItem";

const WITH_SUSPENSE = true;

function ToDos() {
  const { toDos } = useContext(TodoContext);

  const renderListWithSuspense = (todoItems) => {
    return todoItems.map((todoItem, index) => {
      return (
        <Suspense
          key={`index: ${index}`}
          fallback={<div className="listLoader">List Item Loading...</div>}
        >
          <LazyListItem
            item={todoItem}
            key={`index: ${index} ${todoItem.title}`}
            index={index}
          />
        </Suspense>
      );
    });
  };

  const renderList = (todoItems) => {
    return todoItems.map((todoItem, index) => {
      return <ListItem item={todoItem} key={`index: ${index}`} index={index} />;
    });
  };

  return (
    <>
      {WITH_SUSPENSE ? (
        <ul className="todoList">{renderListWithSuspense(toDos)}</ul>
      ) : (
        <ul className="todoList">{renderList(toDos)}</ul>
      )}
    </>
  );
}

export default ToDos;
