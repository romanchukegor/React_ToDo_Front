import React, { useEffect, useState } from "react";
import Task from "./Components/Task";
import TaskForm from "./Components/TaskForm";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/tasks";
    axios.get(url).then((resp) => {
      const allTasks = resp.data.allTasks;
      setTodos(allTasks);
    });
  }, []);

  const addTask = (input) => {
    if (input) {
      const url = `http://localhost:8000/tasks/`;
      axios
        .post(url, {
          text: input,
        })
        .then((resp) => {
          debugger;
          setTodos([...todos, resp.data]);
        });
    }
  };

  const deleteTask = (_id) => {
    const url = `http://localhost:8000/tasks/${_id}`;
    axios.delete(url).then(() => {
      setTodos([...todos.filter((elem) => elem._id !== _id)]);
    });
  };

  const deleteAllTasks = () => {
    const url = "http://localhost:8000/tasks";
    axios.delete(url).then(() => {
      setTodos([]);
    });
  };

  const toggleTask = (_id, isCheck) => {
    const url = `http://localhost:8000/tasks/${_id}/is-check`;
    axios
      .patch(url, {
        isCheck: !isCheck,
      })
      .then((resp) => {
        setTodos([
          todos.map((elem) =>
            elem._id === _id ? { ...elem, isCheck: !elem.isCheck } : { ...elem }
          ),
        ]);
      });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>

        <TaskForm addTask={addTask} />
      </div>
      <div className="content">
        {todos.map((element) => {
          return (
            <Task
              element={element}
              key={element.id}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
      <div className="delete-all" onClick={() => deleteAllTasks()}>
        DELETE ALL
      </div>
    </div>
  );
}

export default App;
