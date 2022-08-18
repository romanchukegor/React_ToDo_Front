import TaskForm from "./components/TaskForm/TaskForm";
import { useState } from "react";
import DeleteAllButton from "./components/DeleteAllButton/DeleteAllButton";
import { url } from "./constants";
import Content from "./components/Content/Content";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>
        <TaskForm setTodos={setTodos} url={url} todos={todos} />
      </div>
      <Content todos={todos} setTodos={setTodos} url={url} />
      <DeleteAllButton setTodos={setTodos} url={url} />
    </div>
  );
};

export default App;
