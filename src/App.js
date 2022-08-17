import { useEffect, useState } from "react";
import Task from "./components/Task/Task";
import TaskForm from "./components/TaskForm/TaskForm";
import axios from "axios";
import DeleteAllButton from "./components/DeleteAllButton/DeleteAllButton";

function App() {
  const url = "http://localhost:8000";

  const [todos, setTodos] = useState([]);

  const getAllTasks = async () => {
    let res = await axios.get(`${url}/tasks`);
    let { allTasks } = res.data;
    setTodos(allTasks);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>
        <TaskForm setTodos={setTodos} url={url} todos={todos} />
      </div>
      <div className="content">
        {todos.map((element) => {
          return (
            <Task
              element={element}
              key={element.id}
              todos={todos}
              setTodos={setTodos}
              url={url}
            />
          );
        })}
      </div>
      <DeleteAllButton
        setTodos={setTodos}
        url={url}
      />
    </div>
  );
}

export default App;
