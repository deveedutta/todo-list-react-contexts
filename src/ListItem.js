import { useContext } from "react";
import { TodoContext } from "./TodoStateManager";

function ListItem({ item, index }) {
  const { updateToDos, removeToDoItem } = useContext(TodoContext);
  return (
    <>
      <li className={item.completed ? "completed" : ""}>
        <input
          type="checkbox"
          defaultChecked={item.completed}
          data-attr={item.completed}
          onChange={(e) => {
            updateToDos(item, index);
          }}
        />
        <span className={`title ${item.completed ? "completed" : ""}`}>
          {item.completed ? "DONE:" : ""}
          {item.title}
        </span>
        <button
          onClick={(e) => {
            removeToDoItem(item, index);
          }}
          style={{
            visibility: item.completed ? "visible" : "xhidden",
          }}
        >
          x
        </button>
      </li>
    </>
  );
}

export default ListItem;
