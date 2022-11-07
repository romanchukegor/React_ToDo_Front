import { useState } from "react";
import "./style.scss";

const TaskForm = ({ addTask }) => {
  const [textInput, setTextInput] = useState("");
  const [textError, setTextError] = useState("");
  const [isError, setIsError] = useState(false);

  const addNewTask = () => {
    if (textInput.trim() === "") {
      setIsError(true);
      setTextError("Поле не может быть пустым");
      return;
    }
    addTask(textInput);
    setTextInput("");
    setIsError(false);
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div className="add-form">
      <input
        name="input"
        type="text"
        placeholder="Enter something..."
        value={textInput}
        onChange={handleChange}
        className={isError ? "add-form__input__error" : "add-form__input"}
      />
      <button className="add-form__button" onClick={addNewTask}>
        ADD TASK
      </button>
      {isError && <div className="add-form__error">{textError}</div>}
    </div>
  );
};

export default TaskForm;
