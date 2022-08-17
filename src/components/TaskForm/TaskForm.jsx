import { useState } from "react";
import "./TaskForm.scss";
import axios from "axios";

const TaskForm = ({ todos, setTodos, url }) => {
  const [userInput, setUserInput] = useState("");

  const addTask = async (input) => {
    if (input) {
      let res = await axios.post(`${url}/tasks`, {
        text: input,
      });
      setTodos([...todos, res.data]);
    }
  };

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input type="text" value={userInput} onChange={handleChange} />
        <button>ADD TASK</button>
      </form>
    </div>
  );
};

export default TaskForm;
