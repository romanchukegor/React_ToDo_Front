import { useEffect } from "react";
import axios from "axios";
import Task from "../Task/Task";
import "./Content.scss"

const Content = ({ todos, setTodos, url }) => {
  const getAllTasks = async () => {
    let res = await axios.get(`${url}/tasks`);
    let { allTasks } = res.data;
    setTodos(allTasks);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
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
  );
};

export default Content;
