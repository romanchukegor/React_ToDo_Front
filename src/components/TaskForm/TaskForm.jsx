import { useState } from "react";
import "./style.scss";

const TaskForm = ({ addTask }) => {
  const [textInput, setTextInput] = useState("");
  const [textError, setTextError] = useState("");

  const addNewTask = () => {
    if (textInput.trim() === "") {
      return;
    }
    addTask(textInput);
    setTextInput("");
  };

  const handleChange = (event) => {
    setTextInput(event.currentTarget.value);
    if (event.currentTarget.value === "") {
      setTextError("Поле не может быть пустым");
    } else {
      setTextError("");
    }
  };

  const handleSumbit = () => {
    addTask(textInput);
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSumbit}>
        <input
          name="input"
          type="text"
          placeholder="Enter something..."
          value={textInput}
          onChange={handleChange}
          className={
            textError ? "input-form__input__error" : "input-form__input"
          }
        />
        {textError && <div style={{ color: "red" }}>{textError}</div>}
        <button type="submit" onClick={addNewTask}>
          ADD TASK
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
