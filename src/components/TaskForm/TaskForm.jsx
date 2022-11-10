import { useState } from "react";
import Error from "components/Error/Error";
import "./style.scss";

const TaskForm = ({ addTask }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState({
    isError: false,
    errorText: "",
  });

  const addNewTask = async () => {
    if (textInput.trim() === "") {
      setError({
        isError: true,
        textError: "Поле не может быть пустым",
      });
      return;
    }
    const addedTask = await addTask(textInput);
    if (addedTask) {
      setTextInput("");
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
      <button 
      className="add-form__button" 
      onClick={addNewTask} 
      type="button"
      >
        ADD TASK
      </button>
      {error.isError && <Error errorText={error.errorText} />}
    </div>
  );
};

export default TaskForm;
