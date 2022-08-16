import "./styles.css";

import ToDos from "./ToDos";
import CreateToDos from "./CreateToDos";
import TodoStateManager from "./TodoStateManager";
export default function App() {
  return (
    <>
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <main className="App">
        <TodoStateManager>
          <CreateToDos />
          <ToDos />
        </TodoStateManager>
      </main>
    </>
  );
}
