import React from "react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>ADD TASK</button>
      </form>
    </div>
  );
};

export default TaskForm;
