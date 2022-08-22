import { useEffect } from "react";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import DeleteAllButton from "../DeleteAllButton/DeleteAllButton";
import axios from "axios";
import Task from "../Task/Task";
import "./TODO.scss";

const TODO = ({ url }) => {
  const [todos, setTodos] = useState([]);

  const getAllTasks = async () => {
    let res = await axios.get(`${url}/tasks`);
    let { allTasks } = res.data;
    setTodos(allTasks);
  };

  const deleteTask = async (_id) => {
    await axios.delete(`${url}/tasks/${_id}`);
    setTodos([...todos.filter((elem) => elem._id !== _id)]);
  };

  const completeTask = async (_id, isCheck) => {
    await axios.patch(`${url}/tasks/${_id}/is-check`, {
      isCheck: !isCheck,
    });

    setTodos([
      ...todos.map((elem) =>
        elem._id === _id ? { ...elem, isCheck: !elem.isCheck } : { ...elem }
      ),
    ]);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="content">
      <TaskForm setTodos={setTodos} url={url} todos={todos} />
      {todos.map((element) => {
        return (
          <Task
            element={element}
            key={element.id}
            todos={todos}
            setTodos={setTodos}
            url={url}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        );
      })}
      <DeleteAllButton setTodos={setTodos} url={url} />
    </div>
  );
};

export default TODO;
