import "./TaskForm.scss";
import { useState } from "react";

const TaskForm = ({addTask}) => {
const [ textInput, setTextInput ] = useState('');

const addNewTask = () => {
  if (textInput.trim() === "") {
    console.log("Error")
    return;
  }
  addTask(textInput)
  setTextInput("");
}

const handleChange = (event) => {
  setTextInput(event.currentTarget.value);
};

const handleSumbit = () => {
  addTask(textInput);
  
};

  return (
    <div className="input-form">
      <form onSubmit={handleSumbit}>
        <input type="text" value={textInput} onChange={handleChange} />
      </form>
      <button type="submit" onClick={addNewTask}>ADD TASK</button>
    </div>
  );
};

export default TaskForm;
