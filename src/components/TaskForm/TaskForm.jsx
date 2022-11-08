import { useState } from "react";
import "./style.scss";

const TaskForm = ({ addTask }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState({
    isError: false,
    textError: "",
  });

  const addNewTask = () => {
    try {
      if (textInput.trim() === "") {
        setError((error) => ({
          ...error,
          isError: true,
          textError: "Поле не может быть пустым",
        }));
        return;
      }
      addTask(textInput);
      setTextInput("");
      setError((error) => ({ ...error, isError: false }));
    } catch (error) {
      setError((error) => ({
        ...error,
        isError: true,
        textError: "Ошибка добавления задачи",
      }));
    }
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
        className={error.isError ? "add-form__input__error" : "add-form__input"}
      />
      <button className="add-form__button" onClick={addNewTask} type="button">
        ADD TASK
      </button>
      {error.isError && (
        <div className="add-form__error">{error.textError}</div>
      )}
    </div>
  );
};

export default TaskForm;
